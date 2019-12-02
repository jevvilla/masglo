import { StyleSheet } from 'react-native';

import { colors, hearderTitle, sizes } from '../../common/styles';

export default StyleSheet.create({
  headerTitle: {
    ...hearderTitle,
  },
  container: {
    flex: 1,
    padding: sizes.base,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: sizes.base,
  },
  row: {
    flexDirection: 'row',
    marginBottom: sizes.base,
  },
  icon: {
    marginRight: sizes.base,
    color: colors.violet,
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
