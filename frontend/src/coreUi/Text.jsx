import styled from 'styled-components';

import { FONT_FAMILY_NORMAL, FONT_SIZE_NORMAL } from '../constants/theme';
import { DEFAULT_TEXT_COLOR } from '../constants/colors';

let Text = styled.div`
  box-sizing: border-box;
  display: inline;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border: 0 solid black;
  border-image: initial;
  color: ${(props) => (props.color ? props.color : DEFAULT_TEXT_COLOR)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : FONT_SIZE_NORMAL)};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : FONT_FAMILY_NORMAL};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
`;

export default Text;
