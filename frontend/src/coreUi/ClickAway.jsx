import React, { useEffect, useRef, ReactNode } from 'react';
import View from './View';

export default function ClickAway(props) {
  let { children, onClickAway, ...otherProps } = props;
  let node = useRef(null);
  useEffect(() => {
    let handler = (event) => {
      if (node.current && node.current.contains(event.target)) {
        return;
      }
      onClickAway();
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <View ref={node} {...otherProps}>
      {children}
    </View>
  );
}
