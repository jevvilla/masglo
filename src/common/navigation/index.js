import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { UserDetails, UserOverview, Camera } from '../../screens';
import { defaultHeader } from '../styles';

import * as routes from './routes';

const Navigator = createStackNavigator(
  {
    [routes.USER_OVERVIEW]: {
      screen: UserOverview,
    },
    [routes.USER_DETAILS]: {
      screen: UserDetails,
    },
    [routes.CAMERA]: {
      screen: Camera,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: defaultHeader,
    },
  },
);

export default createAppContainer(Navigator);
