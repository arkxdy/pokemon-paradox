import { IPokemonBasic } from "@app/type";

const PokemonBasic = (props: { pokemonDetails: IPokemonBasic }) => {
    return (
        <>
            <div className="bg-blue-300 grid grid-cols-2 gap-2">
                <div>
                    <div>
                        <div>Height</div>
                        <div>{props.pokemonDetails.height}</div>
                    </div>
                    <div>
                        Weight
                        <div>{props.pokemonDetails.weight}</div>
                    </div>
                    <div>
                        Species
                        <div>{props.pokemonDetails.species.name}</div>
                    </div>
                </div>
                <div>
                    <div>
                        Base Exp
                        <div>
                            {props.pokemonDetails.baseExperience}
                        </div>
                    </div>
                    <div>
                        ID
                        {props.pokemonDetails.id}
                    </div>
                    <div>
                        Moves
                        <div>{props.pokemonDetails.moves.length}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonBasic;
