import React, { useState, ComponentProps, CSSProperties } from 'react';
import styled from 'styled-components';
import {
  THEME_COLOR,
  WHITE,
  ALT_TEXT_COLOR,
  DEFAULT_TEXT_COLOR,
} from '../constants/colors';
import {
  FONT_SIZE_NORMAL,
  DEFAULT_BORDER_RADIUS,
  FONT_FAMILY_NORMAL,
  FONT_WEIGHT_NORMAL,
} from '../constants/theme';
import Card from './Card';
import Text from './Text';
import View from './View';
import TouchableOpacity from './TouchableOpacity';
import ClickAway from './ClickAway';

import dropdown from '../components/icons/dropdown.svg';
import checkmark from '../components/icons/checkmark.svg';

const defaultTitleExtractor = (item) => String(item);
const defaultKeyExtractor = (item, index) => String(index);

export default function Dropdown(props) {
  let {
    options,
    selectedOption,
    onSelect,
    titleExtractor = defaultTitleExtractor,
    keyExtractor = defaultKeyExtractor,
    containerStyle,
  } = props;
  let [dropdownOpen, toggleDropdown] = useState(false);
  let [selected, setSelected] = useState(selectedOption);

  return (
    <View style={{ zIndex: 2, ...containerStyle }}>
      <Container onPress={() => toggleDropdown(!dropdownOpen)}>
        <Text color={THEME_COLOR}>{selected}</Text>
        <ArrowIcon src={dropdown} alt="arrow-icon" isOpen={dropdownOpen} />
      </Container>
      {dropdownOpen && (
        <ClickAway onClickAway={() => toggleDropdown(false)}>
          <OptionContainer>
            {options.map((item, i) => {
              // TODO: Allow selectedOption to be a function.
              let isSelected = item === selected;
              return (
                <Option
                  key={keyExtractor(item, i)}
                  onPress={() => {
                    onSelect(item);
                    setSelected(item);
                    toggleDropdown(!dropdownOpen);
                  }}
                >
                  <IconContainer>
                    {isSelected && <img src={checkmark} alt="check-icon" />}
                  </IconContainer>
                  <ListText selected={isSelected}>
                    {titleExtractor(item)}
                  </ListText>
                </Option>
              );
            })}
          </OptionContainer>
        </ClickAway>
      )}
    </View>
  );
}

const Container = styled(TouchableOpacity)`
  border: 0.5px solid ${THEME_COLOR};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  padding-left: 8px;
  padding-right: 8px;
  width: 150px;
  height: 36px;
  background-color: ${WHITE};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ArrowIcon = styled.img`
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition-duration: 200ms;
`;

const OptionContainer = styled(Card)`
  min-width: 180px;
  margin-top: 5px;
  background-color: ${WHITE};
  position: absolute;
`;

const Option = styled(TouchableOpacity)`
  padding: 0px 12px;
  height: 45px;
  align-items: center;
  flex-direction: row;
  background-color: ${WHITE};
  &:hover {
    color: ${DEFAULT_TEXT_COLOR};
  }
`;

const IconContainer = styled(View)`
  height: 24px;
  width: 24px;
  object-fit: contain;
  transition: transform 2s;
`;

const ListText = styled.li`
  margin-left: 8px;
  list-style: none;
  font-family: ${FONT_FAMILY_NORMAL};
  font-weight: ${FONT_WEIGHT_NORMAL};
  font-size: ${FONT_SIZE_NORMAL};
  color: ${({ selected }) => (selected ? THEME_COLOR : ALT_TEXT_COLOR)};
`;
