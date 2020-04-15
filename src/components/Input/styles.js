import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 10px;
  height: 46px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  background: #fff;
  border: solid 1px #0000001a;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.2)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 15px;
  color: #999;

  font-weight: bold;
  font-size: 18px;
`;

export const Error = styled.Text``;
