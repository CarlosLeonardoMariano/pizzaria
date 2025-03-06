// services/usuario/createuserServices.js
import express from 'express';
import prisma from "../../prismas/index.js"
import {hash} from "bcryptjs"

class CreateUserService {

    async execute({ name, email, senha}) {
      
        if(!email){
            throw new Error("email invalido");
        }

        const verificarEmailValido = await prisma.usuario.findFirst({
            where:{
                email:email
            }
        })

        if(verificarEmailValido){
            throw new Error("O e-mail fornecido já está registrado. Por favor, utilize outro e-mail.");
        }
    
        const passwordCrypton = await hash(senha, 8)
        const user = await prisma.usuario.create({
            data:{
                name:name,
                email:email,
                passaword:passwordCrypton
            },
            select:{
                id:true,
                name:true,
                email:true,
            }
        })

        return user;
    }
}

export { CreateUserService };
