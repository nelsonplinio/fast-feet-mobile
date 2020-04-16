import styled from 'styled-components/native';
import ImageProfile from '~/components/ImageProfile';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled(ImageProfile)`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const Profile = styled.View`
  align-items: flex-start;
  margin-left: 16px;
  flex: 1;
  margin-right: 16px;
`;

export const Greeting = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const Name = styled.Text`
  color: #666;
  font-size: 28px;
  font-weight: bold;
  align-self: stretch;
`;

export const LogoutButton = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
`;
