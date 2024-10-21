import { Request, Response } from "express";
import User from "../models/UserModel"
import { compare, hash, hashSync } from "bcrypt";
import { generateToken } from "../middleware/authMiddleware";


const getUser = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(password, user.password)
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
        const hashedPassword = await hash( password, 10 )
        const user = await User.create({ username, password:hashedPassword, email })
        const token = generateToken(user.username, user.email)
        return res.status(201).json({username: user.username, email: user.email, token: token});
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create user', details: (error as Error).message });
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body;
        const user = await User.update({ username, password }, { where: { email } });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update user', details: (error as Error).message });
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const result = await User.destroy({ where: { email } });
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user', details: (error as Error).message });
    }
}
export { getUser, createUser, updateUser, deleteUser };
