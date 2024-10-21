import { Request } from "express";

export interface CustomRequest extends Request {
    username?: string,
    email?: string,
    role?: string
}