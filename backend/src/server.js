import express from 'express';
import 'express-async-errors';
import cors from 'cors'
import {router} from './routes.js'

import path from 'path';
import { fileURLToPath } from 'url';




const app = express();
app.use(express.json());
app.use(cors())

app.use(router);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/file', express.static(path.resolve(__dirname, '..', 'tmp')));


app.use( (err,req,res,next)=> {
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal server Error!'
  })


})

app.listen(3000, () => {
  console.log(`Servidor online!!`);
});


