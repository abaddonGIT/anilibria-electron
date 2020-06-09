import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomeScreen from './screens/Home.screen';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.HOME} component={HomeScreen} />
      </Switch>
    </App>
  );
}
