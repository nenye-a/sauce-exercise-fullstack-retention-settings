import React, { forwardRef } from 'react';
import styled from 'styled-components';

import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_SHADOW_WEIGHT,
} from '../constants/theme';

import View from './View';

import { WHITE } from '../constants/colors';

export default forwardRef((props, ref) => {
  let { children, ...otherProps } = props;
  return (
    <StyledCard ref={ref} {...otherProps}>
      {children}
    </StyledCard>
  );
});

const StyledCard = styled(View)`
  border-radius: ${DEFAULT_BORDER_RADIUS};
  border: ${(props) => (props.border ? props.border : '0px solid black')};
  box-shadow: 0px 1px 20px
    rgba(
      186,
      186,
      186,
      ${(props) =>
        props.shadowWeight ? props.shadowWeight : DEFAULT_SHADOW_WEIGHT}
    );
  background-color: ${(props) =>
    props['background-color'] ? props['background-color'] : WHITE};
  overflow: hidden;
`;
