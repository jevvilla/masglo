import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ViewPropTypes, TouchableOpacity } from 'react-native';

import styles from './styles';

const CardItem = props => {
  const {
    name: { first, last },
    picture,
    style: cstyles = {},
    location: { state, country },
    onCardPress,
  } = props;

  return (
    <TouchableOpacity style={[styles.container, cstyles]} activeOpacity={0.7} onPress={onCardPress}>
      <Image source={{ uri: picture.large }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{`${first} ${last}`}</Text>
        <Text style={styles.email}>{`${state}, ${country}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

CardItem.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }).isRequired,

  picture: PropTypes.shape({
    large: PropTypes.string,
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  style: PropTypes.oneOfType([PropTypes.arrayOf(ViewPropTypes.style), ViewPropTypes.style])
    .isRequired,

  onCardPress: PropTypes.func.isRequired,
};

export default CardItem;
