import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 46px;
  background: #3b9eff;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 200px;
  text-align: center;
`;
