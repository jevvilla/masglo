import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  camera: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.transparent,
    padding: sizes.base,
    left: 0,
    right: 0,
    bottom: 0,
  },
  centered: {
    justifyContent: 'center',
  },
  spaced: {
    justifyContent: 'space-between',
  },
  header: {
    position: 'absolute',
    top: sizes.base,
    left: sizes.base,
    width: '100%',
  },
});
