interface NextEvolution {
  num: string;
  name: string;
}

interface PrevEvolution {
  num: string;
  name: string;
}

export interface Pokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  candy_count: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[];
  weaknesses: string[];
  next_evolution?: NextEvolution[];
  prev_evolution?: PrevEvolution[];
}

export interface PokemonResponse {
  pokemon: Pokemon[];
}
