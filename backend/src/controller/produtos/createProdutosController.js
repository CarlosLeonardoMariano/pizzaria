import { CreateProdutosServices } from "../../services/produtos/createProdutosServices.js";


class CreateProdutosController{
    async Handle(req, res){
        const {name, price, descrição, category} = req.body
        const createProdutosControll = new CreateProdutosServices();

        if(!req.file){
            throw new Error('Erro upload file..')
        } else{

            const {originalname, filename} = req.file;
            console.log(filename)

            const produtos = await createProdutosControll.execute(
                {name,
                price,
                descrição,
                banner: '',
                category
                });
        
            return res.json(produtos)
        }
 
    }
}


export {CreateProdutosController}