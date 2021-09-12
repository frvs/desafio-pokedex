import React from 'react';
import { useHistory } from 'react-router';
import { usePokemons } from '../../services/api';
import PokemonCard from '../components/PokemonCard';
import Spinner from '../components/Spinner';

const Home = (): JSX.Element => {
  const { pokemons, isLoading, isError } = usePokemons();
  const history = useHistory();

  if (isLoading) return <Spinner />;
  if (isError) history.push('/404');

  return (
    <div style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr 1fr` }}>
      {pokemons.pokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCard id={pokemon.id} name={pokemon.name} img={pokemon.img} type={pokemon.type} />
        </div>
      ))}
    </div>
  );
};

export default Home;
