import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Main = styled.div`
  width: 80%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFound = (): JSX.Element => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 5000);
  }, []);
  return (
    <Main>
      <img src={process.env.PUBLIC_URL + '/notfound.png'} style={{ width: `300px` }} />
      <h1>Oops, aconteceu um erro :(</h1>
      <h3>Você será redirecionado em alguns instantes...</h3>
    </Main>
  );
};

export default NotFound;
