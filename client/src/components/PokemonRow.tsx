import { Type } from "@app/type";

const PokemonRow: React.FC<IPokemonRow> = (pokemon) => {
    return (
        <>
        <div>
            <img></img>
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            <div>
                {pokemon.types.map((item)=>(
                    <div>{item.type.name}</div>
                ))}
            </div>
            <div>{pokemon.total}</div>
            <div>{pokemon.hp}</div>
            <div>{pokemon.attack}</div>
            <div>{pokemon.defense}</div>
            <div>{pokemon.specialAttack}</div>
            <div>{pokemon.specialDefense}</div>
            <div>{pokemon.speed}</div>
        </div>
        </>
    )
}

export default PokemonRow;


export interface IPokemonRow {
    id: string,
    name: string,
    types: Type[],
    total: number,
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
}