import { File } from "buffer";
import prisma from "../../prismas/index.js";

class CreateProdutosServices{
    async execute({name, price, descricao, banner, category}){

        const produtos = await prisma.produto.create({
            data:{
                name: name,
                price: price,
                descricao: descricao,
                banner: banner,
                
                category: {
                  connect: {id:category}
                }
            }
        });

        return produtos;
    }
}



export {CreateProdutosServices}


