import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '~/components/Button';

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
  margin-top: -${height * 0.12}px;
  padding: 0 16px;
`;

export const Card = styled.View`
  background: #fff;
  border: 1px solid #f1f1f1;
  elevation: 2;
  border-radius: 8px;
  min-height: 300px;
  height: ${height * 0.64}px;
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Camera = styled(RNCamera)`
  overflow: hidden;
  min-height: 300px;
  height: ${height * 0.64}px;
`;

export const Preview = styled.Image`
  overflow: hidden;
  min-height: 300px;
  height: ${height * 0.64}px;
`;

export const PhotoButton = styled.TouchableOpacity`
  z-index: 1000;
  background: red;

  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MCIcons)``;

export const SubmitButton = styled(Button)`
  background: #7159c1;
`;
