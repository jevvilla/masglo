import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../redux/actions/users';
import * as routes from '../../common/navigation/routes';
import CardItem from './component/CardItem';
import { colors } from '../../common/styles';

import styles from './styles';

const UserOverview = props => {
  const {
    actions: { fetchingUsers },
    users: { isFetching, error, users },
  } = props;

  useEffect(() => {
    fetchingUsers();
  }, []);

  const goToUserDetails = () => {
    const { navigation } = props;
    navigation.navigate(routes.USER_DETAILS);
  };

  const renderItem = ({ item }) => {
    return <CardItem onCardPress={goToUserDetails} style={styles.card} {...item} />;
  };

  const keyExtractor = item => item.email;

  const renderUsers = () => {
    if (isFetching) {
      return <ActivityIndicator size="small" color={colors.violet} />;
    }

    return (
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  if (error) {
    return (
      <View style={styles.constainer}>
        <Text>Error</Text>
      </View>
    );
  }

  return <View style={styles.constainer}>{renderUsers()}</View>;
};

UserOverview.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,

  actions: PropTypes.shape({
    fetchingUsers: PropTypes.func,
  }).isRequired,

  users: PropTypes.shape({
    isFetching: PropTypes.bool,
    error: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,

  item: PropTypes.shape({
    email: PropTypes.string,
  }),
};

UserOverview.defaultProps = {
  item: {},
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

export default connect(mapStateToProps, mapDispatchToProps)(UserOverview);
