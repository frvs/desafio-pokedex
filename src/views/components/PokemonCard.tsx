import React from 'react';
import styled from 'styled-components';

interface PokemonCardProps {
  img: string;
  num: string;
  name: string;
  type: string[];
}

interface TypeColorPallete {
  background: string;
  color: string;
}
// https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
const typeColorMap: Map<string, TypeColorPallete> = new Map();
typeColorMap.set('Grass', { background: '#9ecb4a', color: '#000000' });
typeColorMap.set('Poison', { background: '#b880c8', color: '#FFFFFF' });
typeColorMap.set('Fire', { background: '#f77f2c', color: '#FFFFFF' });
typeColorMap.set('Flying', { background: '#A98FF3', color: '#000000' });
typeColorMap.set('Water', { background: '#6390F0', color: '#000000' });
typeColorMap.set('Electric', { background: '#F7D02C', color: '#000000' });
typeColorMap.set('Ground', { background: '#E2BF65', color: '#000000' });
typeColorMap.set('Normal', { background: '#777', color: '#FFFFFF' });
typeColorMap.set('Bug', { background: '#A6B91A', color: '#000000' });
typeColorMap.set('Fighting', { background: '#C22E28', color: '#FFFFFF' });
typeColorMap.set('Psychic', { background: '#F95587', color: '#000000' });
typeColorMap.set('Rock', { background: '#B6A136', color: '#000000' });
typeColorMap.set('Ice', { background: '#96D9D6', color: '#000000' });
typeColorMap.set('Ghost', { background: '#735797', color: '#FFFFFF' });
typeColorMap.set('Dragon', { background: '#6F35FC', color: '#FFFFFF' });

const PokemonCardContainer = styled.div`
  margin: 20px;
`;

const TypeLabel = styled.label<{ bgcolor: string }>((props) => ({
  backgroundColor: props.bgcolor,
  color: props.color,
  borderRadius: `15px`,
  fontSize: `12px`,
  marginRight: `8px`,
  padding: `5px 8px`
}));

const PokemonCard: React.FC<PokemonCardProps> = ({ num, img, name, type }: PokemonCardProps) => {
  return (
    <>
      <PokemonCardContainer>
        <img src={img} />
        <p>#{num}</p>
        <h2>{name}</h2>
        {type.map((text, index) => (
          <TypeLabel
            key={index}
            color={typeColorMap.get(text)?.color}
            bgcolor={typeColorMap.get(text)?.background ?? '#777'}
          >
            <b>{text}</b>
          </TypeLabel>
        ))}
      </PokemonCardContainer>
    </>
  );
};

export default PokemonCard;
