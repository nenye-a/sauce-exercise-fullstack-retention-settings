import React from 'react';
import styled from 'styled-components';

import { View } from '../coreUi';
import { LIGHTEST_GRAY } from '../constants/colors';

export const Background = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <View>{children}</View>
    </Container>
  );
};

const Container = styled(View)`
  background-color: ${LIGHTEST_GRAY};
  width: 100vw;
  min-height: 100vh;
`;
