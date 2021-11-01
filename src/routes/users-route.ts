import { NextFunction, Response, Request, Router } from "express";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ username: 'Diego'}];
    res.status(200).send(users)
})

export default usersRoute;