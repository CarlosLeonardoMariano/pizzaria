import prisma from "../../prismas/index.js";

class CreateCategoriaServices {
    async execute({ name }) {
        if (name === '') {
            throw new Error('Nome Inválido!');
        }

        // Criando a categoria no banco de dados e selecionando os campos 'id' e 'name'
        const categoria = await prisma.categoria.create({
            data: {
                name: name
            },
            select: {
                id: true,   // Seleciona o campo 'id'
                name: true  // Seleciona o campo 'name'
            }
        });

        return categoria;
    }
}

export { CreateCategoriaServices };
