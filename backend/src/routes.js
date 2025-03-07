import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from './controller/usuario/CreateuserController.js';
import { LoginUserController } from "./controller/usuario/LoginUserController.js";
import { DetalhesController } from './controller/usuario/DetalhesController.js';
import { CreateCategoriaController } from './controller/categoria/CreateCategoriaController.js';
import { ListaCategoriaControler } from './controller/categoria/listaCategoriaController.js'; 
import { CreateProdutosController } from './controller/produtos/createProdutosController.js'; 
import IsAutenticantion from './middlewares/isAuteticantion.js';
import uploadConfig from './config/multer.js';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));  // Configura o upload de arquivos

// Rota de usuários
router.post('/usuarios', new CreateUserController().Handle);
router.post('/login', new LoginUserController().handle);
router.get('/info', IsAutenticantion, new DetalhesController().Handle);

// Rota de categorias
router.post('/categorias', IsAutenticantion, new CreateCategoriaController().Handle);

// Rota para listar produtos dentro de categorias
// Aqui o upload de arquivo é opcional, caso esteja enviando algo como parte da requisição
router.get('/categorias', IsAutenticantion, new ListaCategoriaControler().Handle);

// Rota para criar produtos
// A rota agora inclui o upload de arquivo
router.post('/produtos', IsAutenticantion, upload.single('file'), new CreateProdutosController().Handle);

export { router };
