import prisma from "../../prismas/index.js";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken"; 
import dotenv from 'dotenv';
dotenv.config();  // Carrega variáveis de ambiente do arquivo .env

const { sign } = jwt; // Desestruturação da função 'sign' do JWT

class LoginuserServices {
  async execute({ email, senha }) {

    //console.log("JWT_SECRET:", process.env.JWT_SECRET); // Verificando se a chave secreta foi carregada

  
    // Verifica se o usuário existe no banco de dados
    const usuariologin = await prisma.usuario.findFirst({
      where: {
        email: email
      }
    });

    if (!usuariologin) {
      throw new Error("Erro de autenticação: o nome de usuário ou senha estão incorretos. Verifique e tente novamente.");
    }

    // Verifica se a senha fornecida corresponde ao hash armazenado
    const senhaValida = await compare(senha, usuariologin.passaword);

    if (!senhaValida) {
      throw new Error("Erro de autenticação: a senha informada não corresponde ao nosso registro. Tente novamente.");
    }

    // Garantindo que a variável JWT_SECRET esteja definida
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não está definida nas variáveis de ambiente.");
    }

    // Gera o token JWT para o usuário
    const token = sign(
      {
        name: usuariologin.name,
        email: usuariologin.email
      },
      process.env.JWT_SECRET, // Chave secreta do JWT, vinda das variáveis de ambiente
      {
        subject: usuariologin.id,
        expiresIn: '30d' // Define o tempo de expiração do token
      }
    );
    //console.log("Token gerado:", token); // Verifique se o token é gerado corretamente

    // Retorna os detalhes do usuário juntamente com o token gerado
    return { 
        id: usuariologin.id,
        name: usuariologin.name,
        email: usuariologin.email,
        token: token  // Retorna o token gerado
    }; 
  }
}

export { LoginuserServices };
