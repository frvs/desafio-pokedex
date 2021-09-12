import React from 'react';

interface PokemonCardProps {
  img: string;
  id: number;
  name: string;
  type: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, img, name, type }: PokemonCardProps) => {
  return (
    <>
      <div>
        <img src={img} />
        <p>{id}</p>
        <p>{name}</p>
        {type.map((type, index) => (
          <p key={index}>{type}</p>
        ))}
      </div>
    </>
  );
};

export default PokemonCard;
