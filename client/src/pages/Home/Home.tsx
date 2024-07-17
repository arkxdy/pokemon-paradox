
import PokemonHomePage from "@app/components/PokemonHomePage";
import PokemonList from "@app/components/PokemonList";
import { useState } from "react";



const Home = () => {
    const [dashboard, setDashboard] = useState(true);

    return (
        <>
        <label className="inline-flex items-center me-5 cursor-pointer">
            <input type="checkbox" value="" onChange={() => setDashboard(prev=>!prev)} className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label>
        {dashboard && <PokemonHomePage></PokemonHomePage>}
        {!dashboard && <PokemonList></PokemonList>}
        </>

    )
}
export default Home;

