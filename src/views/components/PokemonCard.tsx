import React from 'react';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name }: PokemonCardProps) => {
  return (
    <>
      <div>
        <p>{name}</p>
      </div>
    </>
  );
};

export default PokemonCard;
