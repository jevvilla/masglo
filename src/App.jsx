import React from 'react';
import { Provider } from 'react-redux';

import Router from './common/navigation';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
