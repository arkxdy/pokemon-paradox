import { PokemonDetails } from "@app/type";

const Pokemon = (props: {pokemon: PokemonDetails}) => {
    return (
        <>
            <div>
                {props.pokemon.name}
            </div>
        </>
    )
}

export default Pokemon;