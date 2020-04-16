import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  background: ${lighten(0.2, '#a28fd0')};
  width: 140px;
  height: 140px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const Letters = styled.Text`
  color: #a28fd0;
  font-weight: bold;
  font-size: 32px;
`;

export const Image = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: ${lighten(0.2, '#a28fd0')};
`;
