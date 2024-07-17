const pokemonType: { [key: string]: string}  = {
    normal: "#AAB09F",
    fire: "#EA7A3C",
    water: "#539AE2",
    electric: "#E5C531",
    grass: "#71C558",
    ice: "#70CBD4",
    fighting: "#CB5F48",
    poison: "#B468B7",
    ground: "#CC9F4F",
    flying: "#7DA6DE",
    psychic: "#E5709B",
    bug: "#94BC4A",
    rock: "#B2A061",
    ghost: "#846AB6",
    dragon: "#6A7BAF",
    dark: "#736C75",
    steel: "#89A1B0",
    fairy: "#E397D1",
    default: "#AAB09F"
}

const usePokemonsAttackTypeColorCode = (props:{attackType: string}): string => {
    try{
        return pokemonType[props.attackType];
    } catch (error) {
        return pokemonType.default;
    }
}

export default usePokemonsAttackTypeColorCode;