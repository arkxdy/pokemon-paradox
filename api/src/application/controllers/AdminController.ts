import { Request, Response } from "express";
import Admin from "../models/AdminModel"
import { compare } from "bcrypt";
import { validateBody } from "../../core/utils";

const getAdmin = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        if(!validateBody(req.body, username, password)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        const admin = await Admin.findOne({ where: { username } });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        const isMatch = await compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        return res.status(200).json(admin);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get admin', details: (error as Error).message });
    }
}

const createAdmin = async (req: Request, res: Response) => {
    try{
        const { username, password, email } = req.body;
        if(!validateBody(req.body, username, password, email)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        const admin = await Admin.create({ username, password, email });
        return res.status(201).json(admin);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create admin', details: (error as Error).message });
    }
}

const updateAdmin = async (req: Request, res: Response) => {
    try{
        const { username, password, email } = req.body;
        if(!validateBody(req.body, username, password, email)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        const admin = await Admin.update({ password, email }, { where: { username } });
        return res.status(200).json(admin);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update admin', details: (error as Error).message });
    }
}

const deleteAdmin = async (req: Request, res: Response) => {
    try{
        const { username } = req.body;
        if(!validateBody(req.body, username)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        const admin = await Admin.destroy({ where: { username } });
        return res.status(200).json(admin);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete admin', details: (error as Error).message });
    }
}
