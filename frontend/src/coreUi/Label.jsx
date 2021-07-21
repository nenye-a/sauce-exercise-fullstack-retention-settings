import React from 'react';

import { THEME_COLOR } from '../constants/colors';
import { FONT_SIZE_NORMAL } from '../constants/theme';

import Text from './Text';

/* NOTE: Typing for label component
export type LabelProps = TextProps & {
  text: string;
  id?: string;
  color?: string;
  fontSize?: string;
};
*/

export default function Label(props) {
  let { text, id, color, fontSize, ...otherProps } = props;
  return (
    <Text
      fontSize={fontSize ? fontSize : FONT_SIZE_NORMAL}
      color={color ? color : THEME_COLOR}
      htmlFor={id}
      as={id ? 'label' : 'h5'}
      {...otherProps}
    >
      {text}
    </Text>
  );
}
