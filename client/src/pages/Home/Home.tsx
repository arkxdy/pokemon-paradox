import useGetAllPokemons from "@app/hooks/useGetAllPokemons";
import { IPokemon } from "@app/type";
import React, { Suspense } from "react";

const LazyPokemonList = React.lazy(() => import("../../components/PokemonList"))

const Home = () => {
    const { data, loading, error, handleNext, handlePrev } = useGetAllPokemons()
    if(loading) return <div>loading....</div>
    if(error) return <div>error....</div>

    let pokemons: IPokemon[] = (data?.results) ?? []

    return (
        <>
            <div className="text-red-600">Test</div>
            <Suspense fallback={<div>loading....</div>}>
                <LazyPokemonList pokemons={pokemons}></LazyPokemonList>
            </Suspense>
            <div>
                <div className="" onClick={handlePrev}>Prev</div>
                <div className="" onClick={handleNext}>Next</div>
            </div>
        </>
    )
}
export default Home;

