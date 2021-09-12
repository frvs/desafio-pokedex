import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
