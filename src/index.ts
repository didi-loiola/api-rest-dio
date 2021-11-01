import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users-route';

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(usersRoute);
app.get('/status', (req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send({ foo: 'Mudança'})
})

// Inicialização do servidor
app.listen(4000, ()=> console.log('Executando...'));