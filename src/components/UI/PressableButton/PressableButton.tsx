import React from 'react';
import styled from 'styled-components/native';
import { IPressableButton } from './PressableButton.types';

export const PressableButton: React.FC<IPressableButton> = ({ onPress, title, testID }) => (
  <ButtonContainer onPress={onPress} testID={testID}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  width: 160px;
  padding: 16px 0;
  border-radius: 24px;
  background-color: #fff;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;
