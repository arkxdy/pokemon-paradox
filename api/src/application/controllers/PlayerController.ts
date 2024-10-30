import { Request, Response } from "express";
import Player from "../models/PlayerModel"
import { CustomRequest } from "../../core/types";
import { validateBody } from "../../core/utils";

const getPlayer = async (req: CustomRequest, res: Response) => {
    try{
        const { email } = req.body;
        if(!validateBody(req.body, email)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        if(email === req.email) {
            const player = await Player.findOne({ where: { email } });
            if (!player) {
                return res.status(404).json({ success: false, message: 'Player not found', data: { email: email } });
            }
            return res.status(200).json({ success: true, data: {player} })
        }
        return res.status(400).json({ success: false, message: 'Invalid token' })
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get player', details: (error as Error).message });
    }
}

const createPlayer = async (req: CustomRequest, res: Response) => {
    try{
        const { username, email, fullname, age, team, favorite_pokemon } = req.body;
        if(!validateBody(req.body, username, email, fullname, age)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        if(username === req.username && email === req.email) {
            const player = await Player.create({ username, email, fullname, age, team, favorite_pokemon });
            return res.status(201).json(player);
        } else {
            return res.status(404).json({ success: false, message: 'Invalid Token' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create player', details: (error as Error).message });
    }
}

const updatePlayer = async (req: CustomRequest, res: Response) => {
    try{
        const { username, email, fullname, age, team, favorite_pokemon } = req.body;
        if(!validateBody(req.body, username, email, fullname, age)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        if(username === req.username && email === req.email) {
            const player = await Player.update({ fullname, age, team, favorite_pokemon }, { where: { email } });
            if( player == 1) {
                res.status(200).json({ success: true, message: 'Updated player', data: { username: username, email: email } });
            } else {
                res.status(400).json({ success: false, message: 'Cannot find player', data: { email: email } });
            }
        } else {
            return res.status(404).json({ success: false, message: 'Invalid Token' })
        }
        
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update player', details: (error as Error).message });
    }
}

const deletePlayer = async (req: Request, res: Response) => {
    try{
        const { email } = req.body;
        if(!validateBody(req.body, email)) {
            return res.status(408).json({ error: 'Request body incomplete' });
        }
        const player = await Player.destroy({ where: { email } });
        return res.status(200).json(player);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete player', details: (error as Error).message });
    }
}

export { getPlayer, createPlayer, updatePlayer }