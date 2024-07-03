import {  PokemonListResponse } from "@app/type";
import { useEffect, useState } from "react";

const useGetAllPokemons = () => {
    //const { data, loading, error } = useFetch(url);
    const [data, setData] = useState<PokemonListResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(currentUrl);
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                setNextUrl(result.next)
                setPrevUrl(result.prev)
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [currentUrl]);

    const handleNext = () => {
        if(nextUrl) setCurrentUrl(nextUrl)
    }

    const handlePrev = () => {
        if(prevUrl) setCurrentUrl(prevUrl)
    }

    return {
        data,
        loading,
        error,
        handleNext,
        handlePrev
    }
}

export default useGetAllPokemons;