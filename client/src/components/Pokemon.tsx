import useGetPokemon from "@app/hooks/useGetPokemon";
import { useParams } from "react-router-dom";
import PokemonNotFound from "./template/PokemonNotFound";
import Loading from "./template/Loading";
import usePokemonIdFormat from "@app/hooks/usePokemonIdFormat";
import PokemonStats from "./PokemonStats";
import PokemonBasic from "./PokemonBasic";

const Pokemon = () => {
    let { pokemon } = useParams()

    const { data, pokemonDetail, loading, error } = useGetPokemon(pokemon ?? '')

    if(loading) return <Loading/> 
    if(error) return <PokemonNotFound/> 
    

    //{`https://img.pokemondb.net/artwork/${props.pokemon.name}.jpg`}
    return (
        <>
            <div className="grid grid-cols-2 gap-4 bg-zinc-300">
                <div className="grid grid-rows-2 gap-2">
                    <div className="">
                        {data?.id && 
                          <img src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${usePokemonIdFormat(data?.id + "")}.png`}></img>
                        }
                    </div>
                    <div>
                        {data?.stats && <PokemonStats stats={data?.stats}></PokemonStats>}
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-2">
                    <div>
                        <div className="text-5xl font-bold">{data?.name.toUpperCase()}</div>
                    </div>
                    <div>
                        basic info
                        {pokemonDetail && <PokemonBasic pokemonDetails={pokemonDetail}></PokemonBasic>}
                    </div>
                    <div>
                        <div>
                            {data?.types && data.types.map((item) => (
                                <div key={item.type.name}>{item.type.name}</div>
                            ))}
                        </div>
                        <div>
                            Moves
                            {data?.sprites && data.sprites.front_default}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {data?.name}
                {data?.id}
            </div>
        </>
    )
}

export default Pokemon;