
import crypto from "crypto";
import multer from "multer"; 
import { extname, resolve, dirname } from "path";
import { fileURLToPath } from "url";

export default {
    upload(folder) {
        return {
            storage: multer.diskStorage({

                destination: (req, file, callback) => {
                    const __filename = fileURLToPath(import.meta.url); // Obtém o arquivo atual
                    const __dirname = dirname(__filename); // Obtém o diretório atual
                    callback(null, resolve(__dirname, '..', '..', folder)); // Caminho correto
                },
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;
                    return callback(null, fileName);
                }
                
                
            })
        };
    }
}
