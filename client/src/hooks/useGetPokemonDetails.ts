import { IPokemonBasic, PokemonDetails } from "@app/type";

const useGetPokemonDetails = (pokemon: PokemonDetails): IPokemonBasic => {
    return {
        weight: pokemon.weight,
        height: pokemon.height,
        id: pokemon.id,
        species: pokemon.species,
        moves: pokemon.moves,
        order: pokemon.order,
        baseExperience: pokemon.base_experience
    }
}

export default useGetPokemonDetails;