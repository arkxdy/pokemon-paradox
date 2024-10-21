import { Request, Response } from "express";
import User from "../models/UserModel"
import { compare, hash, hashSync } from "bcrypt";
import { generateToken } from "../middleware/authMiddleware";
import { CustomRequest } from "../../core/types";


const getUser = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = generateToken(user.username, user.email)
        return res.status(200).json({ success: true, data:{ username: user.username, email: user.email, token: token } });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get user', details: (error as Error).message });
    }
}

const createUser = async (req: Request, res: Response) => {
    try{
        const { username, password, email } = req.body;
        const hashedPassword = await hash( password, 10 )
        const user = await User.create({ username, password:hashedPassword, email })
        const token = generateToken(user.username, user.email)
        return res.status(201).json({ success: true, data: {username: user.username, email: user.email, token: token} });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create user', details: (error as Error).message });
    }
}

const updateUser = async (req: CustomRequest, res: Response) => {
    try {
        const { username, password, email } = req.body;
        const emailFromToken = req.email;
        if(emailFromToken !== email) {
            return res.status(400).json({ error: 'Validation error', details: 'Invalid token' });
        }
        const hashedPassword = await hash( password, 10 )
        const user = await User.update({ username: username, password: hashedPassword }, { where: { email } });
        console.log(user == 1)
        if( user == 1){
            res.status(200).json({ success: true, message: 'Updated user', data: { username: username, email: email } });
        } else {
            res.status(200).json({ success: true, message: 'Cannot find user', data: { email: email } });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update user', details: (error as Error).message });
    }
}

const deleteUser = async (req: CustomRequest, res: Response) => {
    try {
        const { email } = req.body;
        const emailFromToken = req.email;
        if(emailFromToken !== email) {
            return res.status(400).json({ error: 'Validation error', details: 'Invalid token' });
        }
        const result = await User.destroy({ where: { email } });
        if(result == 1){
            return res.status(201).json({ success: true, message: 'Deleted user', data: { email: email } });
        } else {
            return res.status(200).json({ success: true, message: 'Cannot find user', data: { email: email } });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user', details: (error as Error).message });
    }
}
export { getUser, createUser, updateUser, deleteUser };