import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Feather';

import * as userActions from '../../redux/actions/users';
import * as strings from '../../common/strings';
import * as routes from '../../common/navigation/routes';
import { IconButton } from '../../common/components';

import styles from './styles';

const UserDetails = props => {
  const [image, setImage] = useState('');
  const {
    navigation,
    navigation: { state },
  } = props;

  const goToCamera = () => {
    navigation.navigate(routes.CAMERA, { onPictureTaken });
  };

  useEffect(() => {
    setImage(state.params.picture.large);
    navigation.setParams({ goToCamera });
  }, []);

  const onPictureTaken = uri => {
    const {
      actions: { changeUserPicture },
    } = props;

    setImage(uri);
    changeUserPicture({ uri, email: state.params.email });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <View>
        <View style={styles.row}>
          <Icon style={styles.icon} size={24} name="mail" />
          <Text style={styles.text}>{state.params.email}</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} size={24} name="map-pin" />
          <Text
            style={styles.text}
          >{`${state.params.location.state}, ${state.params.location.country}`}</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} size={24} name="phone" />
          <Text style={styles.text}>{state.params.phone}</Text>
        </View>
      </View>
    </View>
  );
};

UserDetails.navigationOptions = ({ navigation }) => {
  const cameraAction = navigation.getParam('goToCamera', () => {});

  return {
    headerTitle: <Text style={styles.headerTitle}>{strings.USERDETAILS_TITLE_TEXT}</Text>,
    headerLeft: <IconButton name="arrow-left" onPress={() => navigation.goBack()} />,
    headerRight: <IconButton name="camera" onPress={cameraAction} />,
  };
};

UserDetails.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        onPictureTaken: PropTypes.func,
        picture: PropTypes.shape({
          large: PropTypes.string,
        }),
        email: PropTypes.string,
        location: PropTypes.shape({
          state: PropTypes.string,
          country: PropTypes.string,
        }),
        phone: PropTypes.string,
      }),
    }),
    navigate: PropTypes.func,
    setParams: PropTypes.func,
  }).isRequired,

  actions: PropTypes.shape({
    changeUserPicture: PropTypes.func,
  }).isRequired,

  users: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
