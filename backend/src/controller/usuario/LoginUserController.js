import express from 'express';
import {LoginuserServices} from "../../services/usuario/LoginuserServices.js"


class LoginUserController{
    async handle(req, res){
        const {email,senha} = req.body;    // Desestruturando os dados do corpo da requisição

         // Cria uma instância do serviço
         const loginuserController = new LoginuserServices()

                 // Chama o serviço para criar o login
        const login = await loginuserController.execute({email,senha});

                // Retorna a resposta com o usuário
        return res.json(login);

    }
}
    export{LoginUserController};