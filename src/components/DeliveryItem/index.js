import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Topbar,
  Icon,
  Title,
  Progress,
  Pointer,
  PointerLabel,
  Footer,
  InfoContainer,
  InfoLabel,
  Info,
  Separator,
  DetailsButton,
  TextDetailsButton,
} from './styles';

export default function DeliveryItem({ delivery }) {
  const date = useMemo(
    () => format(parseISO(delivery.createdAt), 'dd/MM/yyyy'),
    [delivery]
  );
  return (
    <Container>
      <Topbar>
        <Icon name="truck" size={22} color="#7159c1" />
        <Title>{delivery.product}</Title>
      </Topbar>

      <Progress>
        <Pointer
          checked={
            delivery.status === 'pending' ||
            delivery.status === 'withdrawn' ||
            delivery.status === 'delivered'
          }
        >
          <PointerLabel checked>Aguardando retirada</PointerLabel>
        </Pointer>

        <Separator />

        <Pointer
          checked={
            delivery.status === 'withdrawn' || delivery.status === 'delivered'
          }
        >
          <PointerLabel>Retirada</PointerLabel>
        </Pointer>

        <Separator />

        <Pointer checked={delivery.status === 'delivered'}>
          <PointerLabel>Entregue</PointerLabel>
        </Pointer>
      </Progress>

      <Footer>
        <InfoContainer>
          <InfoLabel>Data</InfoLabel>
          <Info>{date}</Info>
        </InfoContainer>

        <InfoContainer>
          <InfoLabel>Cidade</InfoLabel>
          <Info>{delivery.recipient.city}</Info>
        </InfoContainer>

        <DetailsButton>
          <TextDetailsButton>Ver Detalhes</TextDetailsButton>
        </DetailsButton>
      </Footer>
    </Container>
  );
}

DeliveryItem.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    product: PropTypes.string,
    canceled_at: PropTypes.string,
    start_date: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    deliveryman_id: PropTypes.number,
    signature_id: PropTypes.number,
    recipient: PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
    }),
  }).isRequired,
};
