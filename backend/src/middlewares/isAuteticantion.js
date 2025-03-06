import jwt from 'jsonwebtoken'; // Importação do módulo inteiro

const IsAutenticantion = (req, res, next) => {
  // RECEBENDO O TOKEN
  const autenToken = req.headers.authorization;
  
  // VERIFICANDO SE TEM O TOKEN
  if (!autenToken) {
    return res.status(401).json({ error: "Token não fornecido." }); // 401 NÃO AUTORIZADO
  }

  // Extraindo o token (assumindo que o formato é "Bearer <token>")
  const [, token] = autenToken.split(" ");


  // Validando o token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Usando jwt.verify para validar o token
   console.log('Decodificando Usuario', decoded) // DECODIFICANDO USUARIO

    const { sub } = decoded; // sub contém o ID ou identificador do usuário
    req.usuarioId = sub; // Armazenando o ID do usuário na requisição

    return next();


  } catch (error) {
    return res.status(401).end()
  }
};

export default IsAutenticantion;
