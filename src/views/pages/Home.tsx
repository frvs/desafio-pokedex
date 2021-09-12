import React from 'react';
import { useHistory } from 'react-router';
import { usePokemons } from '../../services/api';
import PokemonCard from '../components/PokemonCard';
import Spinner from '../components/Spinner';
import styled from 'styled-components';

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

const SearchButton = styled.button`
  background-color: #ec6a2f;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;

const Home = (): JSX.Element => {
  const { pokemons, isLoading, isError } = usePokemons();
  const history = useHistory();

  if (isLoading) return <Spinner />;
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
            <input type="text" placeholder="#002 ou Ivysaur"></input>
            <SearchButton>🔎</SearchButton>
          </span>
        </MainContent>
      </SearchBar>
      <MainContent>
        <PokemonsWrapper>
          {pokemons.pokemon.map((pokemon) => (
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
