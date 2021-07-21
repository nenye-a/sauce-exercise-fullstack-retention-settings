import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { isLocalUrl } from '../helpers';

import View from './View';

/* NOTE: Typing for the touchable opacity component, for refence. 
type PressHandler = () => void;
type Props = Omit<ViewProps, 'onClick'> & {
  onPress?: PressHandler;
  stopPropagation?: boolean;
  preventDefault?: boolean;
};
*/

export default forwardRef((props, forwardedRef) => {
  let {
    onPress,
    href,
    stopPropagation,
    disabled,
    preventDefault,
    ...otherProps
  } = props;
  let isLink = href != null;
  let isLocalLink = isLink && isLocalUrl(href);
  let [metaOrCtrlActive, setMetaOrCtrlActive] = useState(false);
  return (
    <Touchable
      as={isLink ? 'a' : undefined}
      href={href}
      // Make it so all links go to different windows or tabs.
      target={
        isLink && (!isLocalLink || metaOrCtrlActive) ? '_blank' : undefined
      }
      disabled={disabled}
      ref={forwardedRef}
      onKeyDown={(e) => {
        if (
          (e.key === 'Enter' || e.key === 'Spacebar') &&
          onPress &&
          !disabled
        ) {
          onPress();
        }
      }}
      tabIndex={0}
      {...otherProps}
      onClick={(event) => {
        if (
          preventDefault ||
          (isLocalLink && !(event.metaKey || event.ctrlKey))
        ) {
          event.preventDefault();
        }
        if (stopPropagation) {
          event.stopPropagation();
        }
        if (isLocalLink && (event.metaKey || event.ctrlKey)) {
          setMetaOrCtrlActive(true);
        } else if (onPress && !disabled) {
          onPress();
        }
      }}
    />
  );
});

let linkStyles = css`
  background-color: rgba(0, 0, 0, 0);
  color: inherit;
  text-align: inherit;
  font: inherit;
  list-style: none;
  &:hover {
    text-decoration: none;
  }
`;

const Touchable = styled(View)`
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  transition-property: opacity;
  transition-duration: 0.15s;
  outline: none;
  text-decoration: none;
  ${(props) => (props.href == null ? undefined : linkStyles)}
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      cursor: default;
    `}
  &:active {
    opacity: 0.5;
  }
`;
