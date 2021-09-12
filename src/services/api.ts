import useSWR from 'swr';
import { cachedPokemons } from '../data';
import { PokemonResponse } from '../types';

export interface PokemonPayload {
  pokemons: PokemonResponse;
  isLoading: boolean;
  isError: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const fetcher = async (input: RequestInfo, init: RequestInit, ...args: any[]) => {
  const res = await fetch(input, init);
  return res.json();
};

const usePokemons = (): PokemonPayload => {
  const { data, error } = useSWR<PokemonResponse, boolean>(
    `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`,
    fetcher
  );

  return {
    pokemons: data || cachedPokemons,
    isLoading: !error && !data,
    isError: error || false
  };
};

export { usePokemons };
