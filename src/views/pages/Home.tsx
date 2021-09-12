import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { usePokemons } from '../../services/api';
import PokemonCard from '../components/PokemonCard';
import Spinner from '../components/Spinner';
import styled from 'styled-components';
import { Pokemon } from '../../types';

const MainContent = styled.div`
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

const Header = styled.header`
  margin-left: 50px;
  color: #888888;
  font-size: 24px;
  margin: 20px 0 20px 40px;
`;

const SearchBar = styled.section`
  background-color: #313131;
  color: white;
  padding: 20px;
`;

const Home = (): JSX.Element => {
  const [hasFinishedTimeout, setHasFinishedTimeout] = useState<boolean>(false);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setHasFinishedTimeout(true);
    }, 2000);
    setFilteredPokemons(pokemons.pokemon);
  }, [hasFinishedTimeout]);

  const { pokemons, isLoading, isError } = usePokemons();
  const history = useHistory();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const fPokemons = pokemons.pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(input.toLowerCase()) || poke.num.includes(input.replace('#', ''));
    });
    setFilteredPokemons(fPokemons);
  };

  if (isLoading || !hasFinishedTimeout) return <Spinner />;
  if (isError) history.push('/404');
  return (
    <>
      <MainContent>
        <Header>Pokédex</Header>
      </MainContent>
      <SearchBar>
        <MainContent>
          <h2>Name or number</h2>
          <span>
            <input type="text" placeholder="#002 ou Ivysaur" onChange={onChangeHandler}></input>
          </span>
        </MainContent>
      </SearchBar>
      <MainContent>
        <PokemonsWrapper>
          {filteredPokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <PokemonCard num={pokemon.num} name={pokemon.name} img={pokemon.img} type={pokemon.type} />
            </div>
          ))}
        </PokemonsWrapper>
      </MainContent>
    </>
  );
};

export default Home;
