import { Request, Response } from "express";
import User from "../models/UserModel"
import { compare } from "bcrypt";


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
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get user', details: (error as Error).message });
    }
}

const createUser = async (req: Request, res: Response) => {
    try{
        const { username, password, email } = req.body;
        const user = await User.create({ username, password, email });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create user', details: (error as Error).message });
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body;
        const user = await User.update({ username, password, email }, { where: { email } });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update user', details: (error as Error).message });
    }
}

export { getUser, createUser, updateUser };
