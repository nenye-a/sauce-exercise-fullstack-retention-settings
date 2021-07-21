import styled from 'styled-components';
import {
  DARK_GRAY,
  WHITE,
} from '../constants/colors';
import {
  FONT_WEIGHT_MEDIUM,
} from '../constants/theme';
import { View, Pill } from '../coreUi';

import { useHistory } from 'react-router-dom';
import SauceLogoColor from './icons/sauceLogoColor';

export default function HeaderNavBar() {
  let history = useHistory();

  return (
    <Container flex>
      <LogoContainer>
        <SauceLogoColor />
      </LogoContainer>
      <LogoutPill
        text="Logout"
        textProps={{ fontWeight: FONT_WEIGHT_MEDIUM }}
        onPress={() => {
          // Logout function -> Removed due to irrelevance in test. 
          // Button kept for consistency with design.
          history.push('/');
        }}
      />
    </Container>
  );
}

const Container = styled(View)`
  margin: 0px;
  padding: 20px;
  flex-direction: Row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  overflow: hidden;
  position: sticky;
  z-index: 99;
  background-color: ${WHITE};
`;

const LogoContainer = styled(View)`
  width: 159px;
  height: 34px;
  max-width: 159px;
`;

const LogoutPill = styled(Pill)`
  background-color: ${DARK_GRAY};
  padding: 8px 10px;
`;
