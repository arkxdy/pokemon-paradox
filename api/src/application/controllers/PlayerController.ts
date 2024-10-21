import { Request, Response } from "express";
import Player from "../models/PlayerModel"
import { compare } from "bcrypt";

const getPlayer = async (req: Request, res: Response) => {
    try{
        const { username } = req.body;
        const player = await Player.findOne({ where: { username } });
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get player', details: (error as Error).message });
    }
}

const createPlayer = async (req: Request, res: Response) => {
    try{
        const { username, fullname, age, team, favorite_pokemon } = req.body;
        const player = await Player.create({ username, fullname, age, team, favorite_pokemon });
        return res.status(201).json(player);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create player', details: (error as Error).message });
    }
}

const updatePlayer = async (req: Request, res: Response) => {
    try{
        const { username, fullname, age, team, favorite_pokemon } = req.body;
        const player = await Player.update({ fullname, age, team, favorite_pokemon }, { where: { username } });
        return res.status(200).json(player);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update player', details: (error as Error).message });
    }
}

const deletePlayer = async (req: Request, res: Response) => {
    try{
        const { username } = req.body;
        const player = await Player.destroy({ where: { username } });
        return res.status(200).json(player);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete player', details: (error as Error).message });
    }
}
