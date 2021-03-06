import { StyleSheet } from 'react-native';

import { colors, sizes, shadow } from '../../../../common/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    paddingVertical: sizes.base,
    paddingHorizontal: sizes.base * 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    ...shadow(),
  },
  infoContainer: {
    alignItems: 'flex-start',
    maxWidth: 170,
  },
  thumbnail: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: sizes.base,
  },
  name: {
    color: colors.black,
    fontSize: 22,
  },
  email: {
    color: colors.gray,
    fontSize: 15,
    paddingTop: sizes.base / 3,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
  },
});
