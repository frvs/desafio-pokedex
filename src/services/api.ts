import useSWR from 'swr';
import { Pokemon } from '../types';

type PokemonsResponse = {
  pokemons: Pokemon[];
  isLoading: boolean;
  isError: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const fetcher = async (input: RequestInfo, init: RequestInit, ...args: any[]) => {
  const res = await fetch(input, init);
  return res.json();
};

const usePokemons = (): PokemonsResponse => {
  const { data, error } = useSWR(
    `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`,
    fetcher,
  );

  return {
    pokemons: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { usePokemons };
