import React from 'react';
import { View, Text } from 'react-native';

import * as strings from '../../common/strings';

import styles from './styles';

const UserDetails = () => {
  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  );
};

UserDetails.navigationOptions = {
  headerTitle: <Text style={styles.headerTitle}>{strings.USERDETAILS_TITLE_TEXT}</Text>,
};

export default UserDetails;
