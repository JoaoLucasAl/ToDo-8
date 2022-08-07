import express from 'express';
import { DicasController } from './controllers/DicaController.js';
const app = express()
app.use(express.json())
app.listen(8000, () => console.log("Servidor rodando na porta 8000"))

DicasController(app)