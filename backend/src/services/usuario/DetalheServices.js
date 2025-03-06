import express from 'express';
import prisma from "../../prismas/index.js";



class DetalheServices{
    async execute(userId){
        const usuario = await prisma.usuario.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name:true,
                email:true
            }
        })
        //console.log(usuario)

        return usuario;
        }
}

export {DetalheServices};