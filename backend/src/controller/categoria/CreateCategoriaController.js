import { CreateCategoriaServices } from '../../services/categoria/CreateCategoriaServices.js';

class CreateCategoriaController {
    async Handle(req, res) {
        // Acessando o ID do usuário autenticado do req (vindo do middleware)
        const {name} = req.body;

        // Aqui você pode usar o ID do usuário para criar categorias relacionadas a esse usuário
        const createCategoriaControll = new CreateCategoriaServices();
        const categoria = await createCategoriaControll.execute({name});

        return res.json(categoria);
    }
}

export { CreateCategoriaController };
