import React from 'react';
import { View, Text } from 'react-native';

import { IconButton } from '../../common/components';
import * as strings from '../../common/strings';

import styles from './styles';

const UserDetails = () => {
  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  );
};

UserDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: <Text style={styles.headerTitle}>{strings.USERDETAILS_TITLE_TEXT}</Text>,
  headerLeft: <IconButton name="arrow-left" onPress={() => navigation.goBack()} />,
});

export default UserDetails;
