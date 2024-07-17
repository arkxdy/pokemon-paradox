import useGetPokemon from "@app/hooks/useGetPokemon";
import usePokemonIdFormat from "@app/hooks/usePokemonIdFormat";
import usePokemonsAttackTypeColorCode from "@app/hooks/usePokemonsAtkTypeColor";
import { IPokemon } from "@app/type";
import { Link } from "react-router-dom";
import Loading from "./template/Loading";

const PokemonTile = (props: {pokemon: IPokemon}) => {
    const {data, loading, error} = useGetPokemon(props.pokemon.name);
    if(loading) return <Loading/>
    if(error) return <div>error....</div>
    return (
        <>
        {data && <Link to={data?.name} className="w-full h-full hover:border-2 hover:border-black rounded text-center transition-transform duration-200 ease-in-out hover:translate-y-[-4px] bg-slate-300 hover:bg-slate-700 hover:text-white">
            <div className="flex justify-center">
                {data?.id && <img className="h-48 w-48" src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${usePokemonIdFormat(data?.id+'')}.png`}></img>}
            </div>
                
            <div>{data.name}</div>
            Type
            <div className="px-2 grid grid-cols gap-2 justify-items-center">
                {data?.types.map((item) => (
                    <div className="rounded w-fit px-2" key={item.slot} style={{backgroundColor: usePokemonsAttackTypeColorCode({attackType: item.type.name})}}>{item.type.name.toUpperCase()}</div>
                ))}
            </div>
            Ability
            <div className="gap-2">
                {data?.abilities.map((item) => (
                    <div key={item.slot}>{item.ability.name}</div>
                ))}
            </div>
        </Link>}
        </>
    )
}

export default PokemonTile;