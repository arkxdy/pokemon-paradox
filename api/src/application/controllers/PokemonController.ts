
export const getPokemonData = async ( pokemonName: string ) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        return null;
    }
}

const calculateDamage = (attacker: any, defender: any, move: any) => {
    const power = move.power;
    const damage = Math.floor(( power * (attacker.attack / defender.defence) ) + 2 )
    return damage;
}

export const battleRound = (pokemonOne: any, pokemonTwo: any, moveOne: any, moveTwo: any) => {
    const damageToP2 = calculateDamage(pokemonOne, pokemonTwo, moveOne);
    pokemonTwo -= damageToP2;

    const damageToP1 = calculateDamage(pokemonTwo, pokemonOne, moveTwo);
    pokemonOne -= damageToP1;

    return { pokemonOne, pokemonTwo }
}