import express from 'express';
import { DetalheServices } from "../../services/usuario/DetalheServices.js";


class DetalhesController {
    async Handle(req, res) {
        const userId = req.usuarioId; // Garantir que o ID do usuário está correto
       // console.log(userId);

        // Cria uma instância do serviço
        const servicesDetail = new DetalheServices();

        // Chama o serviço para obter o usuário
        const usuario = await servicesDetail.execute(userId);

       // console.log("Dados do usuário retornados:", usuario); // Verificar no console se os dados estão corretos

        // Se os dados estiverem corretos, retorne-os como resposta
        return res.json(usuario); // Garantir que o retorno seja feito com o res.json corretamente
    }
}




export { DetalhesController }