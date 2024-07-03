import { IPokemon, PokemonListProps } from "@app/type";
import PokemonTile from "./PokemonTile";

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
    return (
        <>
        <div className="px-2 grid grid-cols-4 gap-4">
            {pokemons.map((pokemon: IPokemon, index: number) => (
                <PokemonTile key={index} pokemon={pokemon}></PokemonTile>
            ))}
        </div>
        </>
    )
}

export default PokemonList;

