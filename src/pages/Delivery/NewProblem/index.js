import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';
import { useRoute } from '@react-navigation/native';

import api from '~/services/api';
import getErroMessages from '~/utils/getErroMessages';

import {
  Container,
  Header,
  Content,
  Card,
  SubmitButton,
  UnForm,
  UnInput,
} from './styled';

const schema = Yup.object().shape({
  description: Yup.string().required('Uma descrição e necessario.'),
});

export default function NewProblem() {
  const formRef = useRef(null);
  const { params } = useRoute();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await schema.validate(data, {
        abortEarly: false,
      });

      const { description } = data;

      await api.post(`/delivery/${params.delivery_id}/problems`, {
        description,
      });

      formRef.current.reset();
      setLoading(false);
      Alert.alert('Problema criado', 'O problema foi criado com sucesso!');
    } catch (err) {
      formRef.current.setErrors(getErroMessages(err));
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <Card>
            <UnInput
              name="description"
              multiline
              onChangeText={(value) =>
                formRef.current.setFieldValue('description', value)
              }
              placeholder="Inclua aqui o problema que ocorreu na entrega."
              returnKeyType="send"
              onEndEditing={() => formRef.current.submitForm()}
            />
          </Card>
          <SubmitButton
            loading={loading}
            onPress={() => formRef.current.submitForm()}
          >
            Enviar
          </SubmitButton>
        </UnForm>
      </Content>
    </Container>
  );
}
