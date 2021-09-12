import React from 'react';
import styled from 'styled-components';

interface PokemonCardProps {
  img: string;
  num: string;
  name: string;
  type: string[];
}

const typeColorMap: Map<string, string> = new Map();
typeColorMap.set('Grass', '');
typeColorMap.set('Poison', '');
typeColorMap.set('Fire', '');
typeColorMap.set('Flying', '');
typeColorMap.set('Water', '');
typeColorMap.set('Bug', '');
typeColorMap.set('Normal', '');
typeColorMap.set('Electric', '');
typeColorMap.set('Ground', '');
typeColorMap.set('Fighting', '');
typeColorMap.set('Psychic', '');
typeColorMap.set('Rock', '');
typeColorMap.set('Grass', '');
typeColorMap.set('Ice', '');
typeColorMap.set('Ghost', '');
typeColorMap.set('Dragon', '');

const PokemonCardContainer = styled.div`
  margin: 20px;
`;

const TypeLabel = styled.label((props) => ({
  background: props.color,
  borderRadius: `10px`,
  fontSize: `12px`,
  marginRight: `5px`
}));

const PokemonCard: React.FC<PokemonCardProps> = ({ num, img, name, type }: PokemonCardProps) => {
  return (
    <>
      <PokemonCardContainer>
        <img src={img} />
        <p>#{num}</p>
        <h2>{name}</h2>
        {type.map((text, index) => (
          <TypeLabel key={index} color={typeColorMap.get(text)}>
            {text}
          </TypeLabel>
        ))}
      </PokemonCardContainer>
    </>
  );
};

export default PokemonCard;
