import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ViewPropTypes } from 'react-native';

import styles from './styles';

const CardItem = props => {
  const {
    name: { first, last },
    picture,
    style: cstyles = {},
    location: { state, country },
  } = props;

  return (
    <View style={[styles.container, cstyles]}>
      <Image source={{ uri: picture.large }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{`${first} ${last}`}</Text>
        <Text style={styles.email}>{`${state}, ${country}`}</Text>
      </View>
    </View>
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
};

export default CardItem;
