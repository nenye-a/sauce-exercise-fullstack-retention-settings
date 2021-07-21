import React from 'react';
import styled, { css } from 'styled-components';

import {
  THEME_COLOR,
  WHITE,
  DARK_TEXT_COLOR,
  BUTTON_DISABLED_COLOR,
  THEME_COLOR as BUTTON_BORDER_COLOR,
  SHADOW_COLOR,
  BUTTON_ACTIVE_COLOR,
  LIGHT_BUTTON_COLOR,
} from '../constants/colors';
import {
  DEFAULT_BORDER_RADIUS,
  FONT_WEIGHT_NORMAL,
  FONT_SIZE_SMALL,
} from '../constants/theme';

import TouchableOpacity from './TouchableOpacity';
import Text from './Text';
import LoadingIndicator from './LoadingIndicator';

/* NOTE: Typing for button component, styling included for reference.
type TextProps = ComponentProps<typeof Text>;
type Props = ComponentProps<typeof TouchableOpacity> & {
  text: string,
  textProps?: TextProps,
  // Mode determines default styling for button.
  mode?: 'primary' | 'secondary' | 'transparent' | 'withShadow',
  size?: 'small' | 'default',
  shape?: 'block' | 'round',
  icon?: ReactNode,
  badgeText?: string,
  loading?: boolean,
  stopPropagation?: boolean,
  preventDefault?: boolean,
  iconPlacement?: 'start' | 'end',
};
*/

export default function Button(props) {
  let {
    mode = 'primary',
    size = 'default',
    shape = 'block',
    text,
    textProps,
    icon,
    badgeText,
    loading,
    disabled,
    stopPropagation,
    iconPlacement = 'end',
    ...otherProps
  } = props;
  let isLink = otherProps.href != null;
  let buttonContent = [
    <Text
      key={`button-text-${text}`}
      as="span"
      color="white"
      fontWeight={FONT_WEIGHT_NORMAL}
      fontSize={FONT_SIZE_SMALL}
      {...textProps}
    >
      {text}
    </Text>,
    icon,
  ];
  return (
    <Container
      forwardedAs={isLink ? 'a' : 'button'}
      type="button"
      disabled={loading || disabled}
      mode={mode}
      stopPropagation={stopPropagation}
      size={size}
      shape={shape}
      {...otherProps}
    >
      {loading ? (
        <LoadingIndicator
          color={mode === 'primary' ? 'white' : 'purple'}
          containerStyle={{ padding: 0 }}
        />
      ) : (
        <>
          {iconPlacement === 'start' ? buttonContent.reverse() : buttonContent}
        </>
      )}
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  background-color: ${THEME_COLOR};
  justify-content: center;
  padding: 0 12px;
  flex-direction: row;
  align-items: center;
  outline: none;
  text-decoration: none;
  border-radius: ${(props) =>
    props.shape === 'round' ? '14px' : DEFAULT_BORDER_RADIUS};
  height: ${(props) =>
    props.size === 'default' && props.shape === 'block' ? '36px' : '28px'};

  ${(props) =>
    props.mode === 'primary' &&
    css`
      border: 1px solid ${THEME_COLOR};
      &:disabled {
        background-color: ${BUTTON_DISABLED_COLOR};
        border: 1px solid ${BUTTON_DISABLED_COLOR};
      }
    `}
  ${(props) =>
    props.mode === 'secondary' &&
    css`
      background-color: ${WHITE};
      border: 1px solid ${BUTTON_BORDER_COLOR};
      ${Text} {
        color: ${DARK_TEXT_COLOR};
      }
    `}
  ${(props) =>
    props.mode === 'tertiary' &&
    css`
      background-color: ${LIGHT_BUTTON_COLOR};
      border: 1px solid ${LIGHT_BUTTON_COLOR};
      &:disabled {
        background-color: ${BUTTON_DISABLED_COLOR};
        border: 1px solid ${BUTTON_DISABLED_COLOR};
      }
    `}
  ${(props) =>
    props.mode === 'transparent' &&
    css`
      padding: 0;
      background-color: transparent;
      ${Text} {
        color: ${THEME_COLOR};
      }
      &:disabled ${Text} {
        color: ${BUTTON_DISABLED_COLOR};
      }
    `}
    ${(props) =>
    props.mode === 'withShadow' &&
    css`
      background-color: transparent;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
      ${Text} {
        color: ${THEME_COLOR};
      }
      &:disabled ${Text} {
        color: ${BUTTON_DISABLED_COLOR};
      }
    `}
  &:hover {
    opacity: 0.9;
    ${({ mode }) =>
      mode !== 'transparent' &&
      css`
        box-shadow: ${SHADOW_COLOR};
      `}
  }
  &:active {
    opacity: 0.5;
    ${(props) =>
      props.mode === 'primary' &&
      css`
        background-color: ${BUTTON_ACTIVE_COLOR};
        border: 1px solid ${THEME_COLOR};
      `}
  }
`;
