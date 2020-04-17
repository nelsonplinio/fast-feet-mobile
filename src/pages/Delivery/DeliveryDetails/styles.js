import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #7159c1;
  height: ${height * 0.12}px;
`;

export const Content = styled.View`
  margin-top: -${height * 0.08}px;
  padding: 0 16px;
`;

export const Card = styled.View`
  background: #fff;
  border: 1px solid #f1f1f1;
  padding: 16px;
  elevation: 2;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const CardTop = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0px 0 16px;
`;

export const CardTitle = styled.Text`
  color: #7159c1;
  font-size: 22px;
  margin-left: 8px;
  font-weight: bold;
  flex: 1;
`;

export const InfoContainer = styled.View`
  margin-bottom: 16px;
  flex: 1;
`;

export const InfoLabel = styled.Text`
  font-size: 18px;
  color: #666;
  font-weight: bold;
  align-self: stretch;
  flex: 1;
`;

export const InfoText = styled.Text`
  font-size: 17px;
  color: #666;
  align-self: stretch;
  flex: 1;
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: #f8f9fd;
  border-radius: 8px;
  padding: 8px;
`;

export const ActionButton = styled.TouchableOpacity`
  height: 100px;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const TextButton = styled.Text`
  color: #999999;
  text-align: center;
  margin-top: 8px;
`;

export const Divider = styled.View`
  width: 1px;
  align-self: stretch;
  margin: 0 4px;
  background: #0000001a;
`;
