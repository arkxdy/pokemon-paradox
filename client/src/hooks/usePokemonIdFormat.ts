const usePokemonIdFormat = (unformattedId: string) => {
    if(unformattedId.length >= 3) return unformattedId;

    return unformattedId.padStart(3,'0');
}

export default usePokemonIdFormat;