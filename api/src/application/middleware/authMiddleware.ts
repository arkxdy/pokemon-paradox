import { NextFunction, Request, Response } from "express"
import { SECRET_KEY } from "../../core/constant";
import { CustomRequest } from "../../core/types";


const jwt = require('jsonwebtoken');


export const generateToken = (username: string, email: string, role?: string) => {
    try {
        const token = jwt.sign({username: username, email: email, role: role}, SECRET_KEY, { expiresIn: '1h' })
        return token;
    } catch (error) {
        throw error;
    }
}

export const authToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'Access denied' });
        }
        const decoded = jwt.verify(token, SECRET_KEY) as { username: string, email: string, role: string };
        req.username = decoded.username ?? '';
        req.email = decoded.email ?? '';
        req.role = decoded.role ?? 'User';
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error: error });
    }
}

