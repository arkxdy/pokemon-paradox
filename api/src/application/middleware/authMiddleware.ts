import { NextFunction, Request, Response } from "express"
import { CustomRequest, SECRET_KEY } from "../../core/constant";


const jwt = require('jsonwebtoken');


export const generateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body
        const token = jwt.sign({username: username, password: password}, SECRET_KEY)

        return token;
    } catch (error) {

    }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error("Token does not exist");
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error: error });
    }
}

