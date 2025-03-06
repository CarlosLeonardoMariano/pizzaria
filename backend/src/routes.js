import {Router} from 'express';
import multer from 'multer';
import {CreateUserController} from './controller/usuario/CreateuserController.js';
import {LoginUserController} from "./controller/usuario/LoginUserController.js";
import { DetalhesController } from './controller/usuario/DetalhesController.js';
import { CreateCategoriaController} from './controller/categoria/CreateCategoriaController.js';
import { ListaCategoriaControler } from './controller/categoria/listaCategoriaController.js'; 
import { CreateProdutosController } from './controller/produtos/createProdutosController.js'; 
import IsAutenticantion from './middlewares/isAuteticantion.js';
import uploadConfig from './config/multer.js'

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))


router.post('/usuarios', new CreateUserController().Handle)
router.post('/login', new LoginUserController().handle)
router.get('/info', IsAutenticantion, new DetalhesController().Handle)

// ROTAS DE CATEGORIAS
router.post('/categorias', IsAutenticantion, new CreateCategoriaController().Handle)

//ROTAS PARA LISTAR OS PRODUTOS DENTRO DA CATEGORIA
router.get('/categorias', IsAutenticantion, upload.single('file'), new ListaCategoriaControler().Handle)

//ROTAS PRODUTOS
router.post('/produtos', IsAutenticantion, new CreateProdutosController().Handle)
export {router};