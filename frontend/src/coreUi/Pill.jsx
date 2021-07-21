import React from 'react';
import styled, { css } from 'styled-components';

import { THEME_COLOR, WHITE, DISABLED_PILL_COLOR } from '../constants/colors';
import { FONT_SIZE_SMALL, PILL_BORDER_RADIUS } from '../constants/theme';
import Text from './Text';
import TouchableOpacity from './TouchableOpacity';

import View from './View';

export default function Pill(props) {
  let {
    onPress,
    text,
    textProps,
    disabled = false,
    touchableProps,
    ...otherProps
  } = props;

  let pillText = (
    <Text color="white" fontSize={FONT_SIZE_SMALL} {...textProps}>
      {text}
    </Text>
  );

  const pill = (
    <DefaultPill disabled={disabled} {...otherProps}>
      {pillText}
    </DefaultPill>
  );

  return (
    <>
      {onPress ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          {...touchableProps}
        >
          {pill}
        </TouchableOpacity>
      ) : (
        pill
      )}
    </>
  );
}

const defaultPillStyle = css`
  height: 24px;
  min-height: 24px;
  /* So the size doesn't slightly change when purple border shows up when highlighted */
  border: 1px solid;
  border-radius: ${PILL_BORDER_RADIUS};
  background-color: ${THEME_COLOR};
  border-color: ${THEME_COLOR};
  justify-content: center;
  align-items: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const DefaultPill = styled(View)`
  padding: 4px;
  ${defaultPillStyle};
  &:disabled {
    background-color: ${DISABLED_PILL_COLOR};
    border-color: ${DISABLED_PILL_COLOR};
    color: ${WHITE};
  }
`;
