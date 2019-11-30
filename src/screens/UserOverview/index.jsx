import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import * as routes from '../../common/navigation/routes';

const UserOverview = props => {
  const goToUserDetails = () => {
    const { navigation } = props;

    navigation.navigate(routes.USER_DETAILS);
  };

  return (
    <View>
      <TouchableOpacity onPress={goToUserDetails}>
        <Text>UserOverview</Text>
      </TouchableOpacity>
    </View>
  );
};

UserOverview.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserOverview;
