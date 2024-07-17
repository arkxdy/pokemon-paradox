import useGetAllPokemons from "@app/hooks/useGetAllPokemons"
import Loading from "./template/Loading"
import React, { Suspense } from "react"

const LazyPokemonDashboard = React.lazy(() => import('./PokemonDashboard'))

const PokemonHomePage = () => {
    const { data, loading, error, handleNext, handlePrev } = useGetAllPokemons()
    if(loading) return <Loading/>
    if(error) return <div>error....</div>

    return (
        <>
        {data?.results && <>
            <Suspense fallback={<Loading/>}>
                <LazyPokemonDashboard pokemons={data.results}></LazyPokemonDashboard>
            </Suspense>
            <div>
            <button onClick={handlePrev} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Prev</button>
            <button onClick={handleNext} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Next</button>
            </div>
            </> 
        }
        </>

    )
}

export default PokemonHomePage;