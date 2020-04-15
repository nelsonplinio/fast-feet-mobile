import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import { Dimensions } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

const { width } = Dimensions.get('screen');

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #7159c1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 28px;
`;

export const UnForm = styled(Form)`
  align-items: stretch;
`;

export const InnerForm = styled.View`
  align-items: stretch;
  width: ${width * 0.85}px;
  max-width: 350px;
`;

export const UnInput = styled(Input).attrs({
  placeholderColor: '#999',
})`
  margin-bottom: 16px;
  background: #fff;
  color: #888 !important;
`;

export const SubmitButton = styled(Button)`
  background: #82bf18;
`;
