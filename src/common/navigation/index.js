import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { UserDetails, UserOverview } from '../../screens';

import * as routes from './routes';

const Navigator = createStackNavigator({
  [routes.USER_OVERVIEW]: {
    screen: UserOverview,
  },
  [routes.USER_DETAILS]: {
    screen: UserDetails,
  },
});

export default createAppContainer(Navigator);
