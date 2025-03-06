import prisma from "../../prismas/index.js";

class CreateProdutosServices{
    async execute({name, price,descrição,banner,category}){
        return {ok:true}
    }
}



export {CreateProdutosServices}