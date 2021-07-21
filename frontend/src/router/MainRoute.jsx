import React from 'react';
import styled from 'styled-components';
import { View } from '../coreUi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { allAccessRoutes } from './routes';
import { HeaderNavBar } from '../components';
import { LIGHTEST_GRAY } from '../constants/colors';

export default function MainRoute() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

function Routes() {
  let routeMapper = (
    { component: Component, showHeader, ...routeProps },
    index,
  ) => {
    return (
      <Route key={index.toString() + routeProps.path} {...routeProps}>
        <View>
          {showHeader && <HeaderNavBar />}
          <Component />
        </View>
      </Route>
    );
  };
  let mapRoutes = (routes) => routes.map(routeMapper);
  return (
    <Switch>
      {mapRoutes(allAccessRoutes)}
    </Switch>
  );
}

let Content = styled(View)`
  flex-direction: row;
  justify-content: 'space-between;
  background-color: ${LIGHTEST_GRAY};
  padding: 0px 20px;
  min-height: 100vh;
`;
