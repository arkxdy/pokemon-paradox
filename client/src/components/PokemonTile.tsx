import useGetPokemon from "@app/hooks/useGetPokemon";
import { IPokemon } from "@app/type";

const PokemonTile = (props: {pokemon: IPokemon}) => {
    const {data, loading, error} = useGetPokemon(props.pokemon.name);
    if(loading) return <div>loading....</div>
    if(error) return <div>error....</div>
    return (
        <>
        <div className="border-2 rounded justify-items-center items-center">
            
            <img className="" src={`https://img.pokemondb.net/artwork/${props.pokemon.name}.jpg`}></img>
            <div>{props.pokemon.name}</div>
            Type
            <div>
                {data?.types.map((item) => (
                    <div key={item.slot}>{item.type.name}</div>
                ))}
            </div>
            Ability
            <div className="flex gap-2">
                {data?.abilities.map((item) => (
                    <div key={item.slot}>{item.ability.name}</div>
                ))}
            </div>
            
        </div>
        </>
    )
}

export default PokemonTile;