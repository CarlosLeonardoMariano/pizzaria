import prisma from "../../prismas/index.js";


class ListaCategoriaServices{
    async execute(){
    
        const categoria = await prisma.categoria.findMany({
            select:{
                id:true,
                name:true,
            }});

            return categoria;
    }
}

export {ListaCategoriaServices}