import { Text as NativeText } from 'react-native';

import { getTextStyles } from './styles';

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const styles = getTextStyles();
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;