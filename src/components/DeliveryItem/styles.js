import styled, { css } from 'styled-components/native';

import IconFA5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  margin-bottom: 16px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
`;

export const Topbar = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px;

  align-self: stretch;
`;

export const Icon = styled(IconFA5)`
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #7159c1;
  align-self: stretch;
  flex: 1;
`;

export const Progress = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  margin: 22px 20px 58px;
`;

export const Pointer = styled.View`
  width: 14px;
  height: 14px;
  overflow: visible;
  position: relative;
  border-radius: 10px;
  border: 2px solid #7159c1;
  ${({ checked }) =>
    checked &&
    css`
      background: #7159c1;
    `}
`;

export const Separator = styled.View`
  flex: 1;
  height: 2px;
  background: #7159c1;
`;

export const PointerLabel = styled.Text`
  width: 90px;
  text-align: center;
  position: absolute;
  bottom: ${({ children }) => (children.length < 10 ? -26 : -36)}px;
  left: ${10 - 45}px;
  color: #666;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  background: #f1f1f1;
  padding: 20px;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  flex: 1.5;
`;

export const InfoLabel = styled.Text`
  color: #666;
  font-size: 16px;
  flex: 1;
`;

export const Info = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const DetailsButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextDetailsButton = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 14px;
  align-self: stretch;
`;
