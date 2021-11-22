import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden-error-model";
import userRepository from "../repositories/user-repository";
import JWT from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
require('dotenv').config();

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const authorizationHeader = req.headers['authorization']
        
        if(!authorizationHeader){
            throw new ForbiddenError("Credenciais não informadas")
        }

        const [ authenticationType, token] = authorizationHeader.split(' ')

        if(authenticationType !== 'Basic' || !token){
            throw new ForbiddenError("Tipo de autenticação inválido")
        }

        const tokenContent = Buffer.from(token,'base64').toString('utf-8')
        const [username, password] = tokenContent.split(':')

        if(!username || !password){
            throw new ForbiddenError("Credenciais vazias")
        }

        const user = await userRepository.findAllUsernameAndPassword(username, password);
        console.log(user)

        if(!user){
            throw new ForbiddenError("Usuário ou senha inválidos");
        }
        const jwtPayload = { username: user.username };
        const jwtOptions = {subject: user.uuid };
        const secret = process.env.SECRET_JWT || 'secret';
        const jwt = JWT.sign(jwtPayload, secret, jwtOptions);

        res.status(StatusCodes.OK).send({ token: jwt});
    } catch (error) {
        next(error)
    }
})

export default authorizationRoute;