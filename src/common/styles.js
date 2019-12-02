export const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 12,
  padding: 25,
};

export const colors = {
  violet: 'rgb(88, 61, 233)',
  red: 'rgb(255,100,100)',
  green: 'rgb(150, 255, 150)',
  black: '#323643',
  white: '#FFFFFF',
  background: 'rgb(249, 249, 254)',
  gray: '#C5CCD6',
  transparent: '#00000000',
};

export const shadow = () => {
  return {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.13,
    shadowRadius: 3.62,
    elevation: 2,
  };
};

export const defaultHeader = {
  borderBottomWidth: 0,
  elevation: 0,
  height: 64,
  backgroundColor: colors.background,
};

export const hearderTitle = {
  color: colors.violet,
  fontWeight: 'bold',
  fontSize: 22,
  opacity: 0.8,
};
