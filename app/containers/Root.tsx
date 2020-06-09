import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';
import initMobxStore from "../stores";

const stores = initMobxStore();

const Root = () => (
  <Provider {...stores}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default Root;
