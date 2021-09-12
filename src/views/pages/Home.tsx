import React from 'react';
import { useHistory } from 'react-router';
import { usePokemons } from '../../services/api';
import PokemonCard from '../components/PokemonCard';
import Spinner from '../components/Spinner';
import styled from 'styled-components';

const Main = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const PokemonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 481px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Home = (): JSX.Element => {
  const { pokemons, isLoading, isError } = usePokemons();
  const history = useHistory();

  if (isLoading) return <Spinner />;
  if (isError) history.push('/404');
  return (
    <Main>
      <PokemonsWrapper>
        {pokemons.pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard num={pokemon.num} name={pokemon.name} img={pokemon.img} type={pokemon.type} />
          </div>
        ))}
      </PokemonsWrapper>
    </Main>
  );
};

export default Home;
