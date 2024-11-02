// src/types.ts
export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
  email: string;
}

export type ProviderProps = {
    children: React.ReactNode,
}

export interface IPokemon {
    name: string,
    url: string
}

export interface PokemonListProps {
    pokemons: IPokemon[]
}

export interface PokemonListResponse {
    count: number,
    next: string | null,
    prev: string | null,
    results: {
      name: string;
      url: string;
    }[];
}

export interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  export interface Form {
    name: string;
    url: string;
  }
  
  export interface Species {
    name: string;
    url: string;
  }
  
  export interface Sprite {
    front_default: string;
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  export interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  export interface Move {
      name: string,
      url: string
  }
  export interface PokemonDetails {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    species: Species;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
    moves: Move[]
  }

  export interface IPokemonBasic {
    baseExperience: number,
    height: number,
    weight: number,
    order: number,
    id: number,
    species: Species,
    moves: Move[]
}