import { Response, Request } from "express";
import { battleRound, getPokemonData } from "./PokemonController";

export const startGame = async ( req: Request, res: Response ) => {
    try {
        const { playerOnePokemon, playerTwoPokemon } = req.body;
        const playerOneData = await getPokemonData(playerOnePokemon)
        const playerTwoData = await getPokemonData(playerTwoPokemon)
        const gameState = {
            playerOne: {name: playerOneData.name, hp: playerOneData.stats[0].base_stat, attack: playerOneData.stats[1].base_stat, defense: playerOneData.stats[2].base_stat, moves: playerOneData.moves.slice(0, 4)},
            playerTwo: {name: playerTwoData.name, hp: playerTwoData.stats[0].base_stat, attack: playerTwoData.stats[1].base_stat, defense: playerTwoData.stats[2].base_stat, moves: playerTwoData.moves.slice(0, 4)},
            currentRound: 1
        }
        res.status(201).json({ message: "Battle started!", gameState })
    } catch ( error ) {
        res.status(500).json({ error: 'Failed to start the game', details: (error as Error).message })
    }
}

export const attack = async ( req: Request, res: Response ) => {
    try {
        const { gameState, playerOneMove, playerTwoMove } = req.body;
        const moveOne = gameState.playerOne.moves[playerOneMove];
        const moveTwo = gameState.playerTwo.moves[playerOneMove];

        const updatedState = battleRound(gameState.playerOne, gameState.playerTwo, moveOne, moveTwo);

        if(updatedState.pokemonOne.hp <= 0 || updatedState.pokemonTwo.hp <= 0) {
            res.status(200).json({ message: "Game Over!", gameState: updatedState })
        } else {
            res.status(200).json({ message: "Next round", gameState: updatedState });
        }
    } catch ( error ) {
        res.status(500).json({ error: 'Failed to attack', details: (error as Error).message })
    }
}