
import { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const SECRET_KEY: Secret = 'aQvk32!JMaP';

export interface CustomRequest extends Request {
 token: string | JwtPayload;
 username?: string,
 password?: string,
 role?: string
}