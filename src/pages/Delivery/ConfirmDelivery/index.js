import React, { useState, useRef } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  Container,
  Header,
  Content,
  Card,
  SubmitButton,
  Preview,
  Camera,
  PhotoButton,
  Icon,
} from './styles';

export default function ConfirmDelivery() {
  const { params } = useRoute();
  const navigation = useNavigation();

  const cameraRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [signature, setSignature] = useState(null);

  async function handleTakePicture() {
    const picture = await cameraRef.current.takePictureAsync({
      quality: 0.5,
      base64: false,
    });
    setSignature(picture);
  }

  async function handleFinishDelivery() {
    setLoading(true);

    const { delivery } = params;
    const { deliveryman_id, id: delivery_id } = delivery;

    const data = new FormData();

    data.append('file', {
      type: 'image/jpeg',
      uri: signature.uri,
      name: `signature.jpg`,
    });

    try {
      await api.post(
        `/deliveryman/${deliveryman_id}/deliveries/${delivery_id}/finish-delivery`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data;',
          },
        }
      );

      navigation.navigate('Dashboard');

      Alert.alert('Entrega finalizada', 'Entrega foi finalizada com sucesso!!');
    } catch (err) {
      console.tron.warn(err);
      Alert.alert(
        'Problema ao finalizar',
        'Não foi possivel finalizar essa entrega'
      );
    }

    setLoading(false);
  }

  return (
    <Container>
      <Header />
      <Content>
        <Card>
          {signature ? (
            <>
              <Preview source={{ uri: signature.uri }} />
              <PhotoButton onPress={() => setSignature(null)}>
                <Icon name="trash-can-outline" color="#fff" size={36} />
              </PhotoButton>
            </>
          ) : (
            <>
              <Camera ref={cameraRef} />
              <PhotoButton onPress={handleTakePicture}>
                <Icon name="camera" color="#fff" size={36} />
              </PhotoButton>
            </>
          )}
        </Card>
        <SubmitButton
          disabled={!signature || loading}
          loading={loading}
          onPress={handleFinishDelivery}
        >
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
