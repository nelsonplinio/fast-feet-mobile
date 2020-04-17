import React, { useMemo } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Content,
  Card,
  CardTop,
  CardTitle,
  InfoContainer,
  InfoLabel,
  InfoText,
  HorizontalContainer,
  ActionContainer,
  ActionButton,
  TextButton,
  Divider,
} from './styles';

export default function DeliveryDetails() {
  const { params } = useRoute();
  const navigation = useNavigation();

  const delivery = useMemo(() => {
    let statusLabel = '';
    switch (params.delivery.status) {
      case 'withdrawn': {
        statusLabel = 'Retirado';
        break;
      }

      case 'delivered': {
        statusLabel = 'Entregue';
        break;
      }

      case 'canceled': {
        statusLabel = 'Cancelado';
        break;
      }

      default: {
        statusLabel = 'Pendente';
        break;
      }
    }
    return {
      ...params.delivery,
      statusLabel,
      startDateFormatted: params.delivery.start_date
        ? format(parseISO(params.delivery.start_date), 'dd/MM/yyyy')
        : null,
      endDateFormatted: params.delivery.end_date
        ? format(parseISO(params.delivery.end_date), 'dd/MM/yyyy')
        : null,
    };
  }, [params.delivery]);

  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Container>
        <Header />

        <Content>
          <Card>
            <CardTop>
              <Icon name="truck" size={26} color="#7159c1" />
              <CardTitle>Informações da entrega</CardTitle>
            </CardTop>

            <InfoContainer>
              <InfoLabel>DESTINATÁRIO</InfoLabel>
              <InfoText>{delivery.recipient.name}</InfoText>
            </InfoContainer>

            <InfoContainer>
              <InfoLabel>ENDEREÇO DE ENTREGA</InfoLabel>
              <InfoText>
                {delivery.recipient.street}, {delivery.recipient.number},{' '}
                {delivery.recipient.city} - {delivery.recipient.state},{' '}
                {delivery.recipient.postal_code} {delivery.recipient.complement}
              </InfoText>
            </InfoContainer>

            <InfoContainer>
              <InfoLabel>PRODUTO</InfoLabel>
              <InfoText>{delivery.product}</InfoText>
            </InfoContainer>
          </Card>

          <Card>
            <CardTop>
              <Icon name="calendar-today" size={26} color="#7159c1" />
              <CardTitle>Situação da entrega</CardTitle>
            </CardTop>

            <InfoContainer>
              <InfoLabel>STATUS</InfoLabel>
              <InfoText>{delivery.statusLabel}</InfoText>
            </InfoContainer>

            <HorizontalContainer>
              <InfoContainer>
                <InfoLabel>DATA DE RETIRADA</InfoLabel>
                <InfoText>
                  {delivery.startDateFormatted
                    ? delivery.startDateFormatted
                    : '--/--/--'}
                </InfoText>
              </InfoContainer>

              <InfoContainer>
                <InfoLabel>DATA DE ENTREGA</InfoLabel>
                <InfoText>
                  {delivery.endDateFormatted
                    ? delivery.endDateFormatted
                    : '--/--/--'}
                </InfoText>
              </InfoContainer>
            </HorizontalContainer>
          </Card>

          <ActionContainer>
            <ActionButton
              onPress={() =>
                navigation.navigate('NewProblem', {
                  delivery_id: delivery.id,
                })
              }
            >
              <Icon name="close-circle-outline" size={26} color="#E74040" />
              <TextButton>Informar Problema</TextButton>
            </ActionButton>

            <Divider />

            <ActionButton onPress={() => navigation.navigate('Problems')}>
              <Icon name="alert-circle-outline" size={26} color="#E7BA40" />
              <TextButton>Visualizar Problemas</TextButton>
            </ActionButton>

            <Divider />

            <ActionButton
              onPress={() => navigation.navigate('ConfirmDelivery')}
            >
              <Icon name="check-circle-outline" size={26} color="#7159c1" />
              <TextButton>Confirmar Entrega</TextButton>
            </ActionButton>
          </ActionContainer>
        </Content>
      </Container>
    </>
  );
}
