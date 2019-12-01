import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Router from './common/navigation';
import store from './redux/store';
import { colors } from './common/styles';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
    <Router />
  </Provider>
);

export default App;
