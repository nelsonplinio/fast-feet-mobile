import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #7159c1;
  height: ${height * 0.12}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const Content = styled(FlatList)`
  margin-top: -${height * 0.05}px;
`;

export const Card = styled.View`
  background: #fff;
  border: 1px solid #f1f1f1;
  padding: 18px 16px;
  elevation: 2;
  margin-bottom: 18px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #666;
  font-weight: bold;
  flex: 1;
`;

export const Created = styled.Text`
  font-size: 14px;
  color: #666;
`;
