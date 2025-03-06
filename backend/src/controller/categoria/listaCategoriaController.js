import { ListaCategoriaServices } from "../../services/categoria/listaCategoriaServices.js";


class ListaCategoriaControler{
    async Handle(req,res){


        const listaCategoriaControll = new ListaCategoriaServices();
        const listar = await listaCategoriaControll.execute();

        res.json(listar);
    }
}


export {ListaCategoriaControler}