const fetchSearchResult = async (query: string): Promise<SearchQueryResponse> => {
    try {
        const response = await fetch(`https://api.nationalize.io/?name=${query}`);
        const data: SearchQueryResponse = await response.json();
        return data;
    } catch (error: any) {
        return error;
    }
} 

export default fetchSearchResult;

export type SearchQueryResponse = {
    count: number,
    name: string,
    country: Country[],
    error: any
}

export type Country = {
    country_id: string,
    probability: number
}