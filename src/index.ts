import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users-route';
import statusRoute from './routes/status-route';

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(4000, ()=> console.log('Executando...'));