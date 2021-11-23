import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users-route';
import statusRoute from './routes/status-route';
import errorHandler from './middlewares/error-handler-middleware';
import authorizationRoute from './routes/authorization-route';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication-middleware';

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(statusRoute);
app.use(authorizationRoute)

//Rotas Autenticadas com JWT
app.use(jwtAuthenticationMiddleware)
app.use(usersRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(4000, ()=> console.log('Executando na porta 4000...'));