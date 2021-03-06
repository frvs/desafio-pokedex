import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner = (): JSX.Element => {
  return (
    <SpinnerContainer className="col spinner_item p-5">
      <Loader type="MutatingDots" color="#000000" height={80} width={80} />
      <h2>Carregando...</h2>
    </SpinnerContainer>
  );
};

export default Spinner;
