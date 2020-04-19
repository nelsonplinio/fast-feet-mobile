import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Form } from '@unform/mobile';

import Button from '~/components/Button';
import Input from '~/components/Input';

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
  margin-bottom: 18px;
  border-radius: 8px;
  min-height: 300px;
  height: ${height * 0.55}px;
  position: relative;
`;

export const UnForm = styled(Form)``;

export const UnInput = styled(Input)`
  height: ${height * 0.4}px;
  align-items: flex-start;
  border: 0;
  padding: 0px;
`;

export const SubmitButton = styled(Button)`
  background: #7159c1;
`;
