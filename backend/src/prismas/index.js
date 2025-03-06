import { PrismaClient } from '@prisma/client';  // Importação correta
const prisma = new PrismaClient();             // Criando a instância do PrismaClient
export default prisma;                         // Exportando a instância para uso em outros arquivos
