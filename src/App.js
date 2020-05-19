import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './components';
import { configureStore, history } from './store/store';
import { routes } from './routes';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
);

export default App;
