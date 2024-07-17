import { IPokemonBasic, PokemonDetails } from "@app/type";
import { useEffect, useState } from "react";
import useGetPokemonDetails from "./useGetPokemonDetails";

const useGetPokemon = (pokemonName:string) => {

    const [data, setData] = useState<PokemonDetails>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState();
    const [pokemonDetail, setPokemonDetail] = useState<IPokemonBasic>();



    useEffect(() => {
        (async function(){
            try{
                setLoading(true)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                const data = await res.json()
                setData(data);
                setPokemonDetail(useGetPokemonDetails(data))
            }catch (error: any) {
                setLoading(true)
                setError(error)
            } finally {
                setLoading(false)
            }
        })()
    },[])

    return {
        data,
        pokemonDetail,
        loading,
        error
    }
}

export default useGetPokemon;