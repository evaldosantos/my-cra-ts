import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

const Router = ({ routes, history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      {routes.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </ConnectedRouter>
);

Router.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ),
};

Router.defaultProps = {
  routes: [],
};

export default Router;
