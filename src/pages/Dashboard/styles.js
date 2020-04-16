import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  background: #fff;
  flex: 1;

  padding: 16px 16px 0 16px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 20px;

  margin-top: 22px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  align-self: stretch;
  flex: 1;
`;

export const SectionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Section = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SectionText = styled.Text`
  color: ${({ checked }) =>
    checked ? '#7159c1' : 'rgba(150, 150, 150, 0.95)'};

  font-weight: bold;
  font-size: 17px;
  ${({ checked }) =>
    checked &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #7159c1;
    `}
`;

export const List = styled(FlatList)``;
