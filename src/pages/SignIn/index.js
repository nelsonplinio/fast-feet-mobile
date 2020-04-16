import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import getErroMessages from '~/utils/getErroMessages';

import {
  Container,
  Logo,
  UnForm,
  InnerForm,
  UnInput,
  SubmitButton,
} from './styles';

import logo from '~/assets/logo_white.png';

const schema = Yup.object().shape({
  deliveryman_id: Yup.number().required(),
});

export default function SignIn() {
  const formRef = useRef(null);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const { deliveryman_id } = data;

      dispatch(signInRequest(deliveryman_id));
    } catch (err) {
      formRef.current.setErrors(getErroMessages(err));
    }
  }

  return (
    <Container>
      <Logo source={logo} />
      <UnForm ref={formRef} onSubmit={handleSubmit}>
        <InnerForm>
          <UnInput
            name="deliveryman_id"
            numberOfLines={1}
            keyboardType="numeric"
            returnKeyType="send"
            type="numeric"
            placeholder="Informe seu ID de cadastro"
            onChangeText={(value) =>
              formRef.current.setFieldValue('deliveryman_id', value)
            }
            onSubmitEditing={() => formRef.current.submitForm()}
          />
          <SubmitButton
            loading={loading}
            onPress={() => formRef.current.submitForm()}
          >
            Entrar no sistema
          </SubmitButton>
        </InnerForm>
      </UnForm>
    </Container>
  );
}
