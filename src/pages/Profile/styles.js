import styled from 'styled-components';
import ImageProfile from '~/components/ImageProfile';
import Button from '~/components/Button';

export const Container = styled.View`
  align-items: center;
  padding: 32px;
  background: #fff;
  flex: 1;
`;

export const Image = styled(ImageProfile)`
  margin-bottom: 32px;
`;

export const DataContainer = styled.View`
  align-self: stretch;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #666;
  margin-bottom: 4px;
`;

export const Data = styled.Text`
  font-size: 26px;
  color: #444;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  background: #e74040;
  align-self: stretch;
  margin-top: 22px;
`;
