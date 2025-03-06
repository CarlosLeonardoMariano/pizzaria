// controllers/usuario/createuserController.js
import express from 'express';
import { CreateUserService } from '../../services/usuario/CreateuserServices.js';

class CreateUserController {
    async Handle(req, res) {
        const { name, email, senha } = req.body; // Desestruturando os dados do corpo da requisição

        // Cria uma instância do serviço
        const createUserService = new CreateUserService();

        // Chama o serviço para criar o usuário
        const usuario = await createUserService.execute({ name, email, senha });

        // Retorna a resposta com o usuário
        return res.json(usuario);
    }
}

export { CreateUserController };
