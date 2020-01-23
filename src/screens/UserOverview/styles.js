import { StyleSheet } from 'react-native';

import { colors, sizes, hearderTitle } from '../../common/styles';

export default StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    width: '100%',
    minHeight: 110,
    marginVertical: sizes.base,
  },
  flatlist: { paddingHorizontal: 16 },
  headerTitle: {
    ...hearderTitle,
  },
});
