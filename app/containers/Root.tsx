import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import Routes from '../Routes';
import initMobxStore from "../stores";

const stores = initMobxStore(null);

type Props = {
  history: History;
};

const Root = ({ history }: Props) => (
  <Provider {...stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);

export default hot(Root);
