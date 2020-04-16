import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  TitleContainer,
  Title,
  SectionContainer,
  Section,
  SectionText,
  List,
} from './styles';

import Header from '~/components/Header';
import DeliveryItem from '~/components/DeliveryItem';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`/deliveryman/${profile.id}/deliveries`, {
        params: { delivered },
      });

      setDeliveries(response.data);
    }

    loadDelivery();
  }, [delivered, profile.id]);

  return (
    <Container>
      <Header />
      <TitleContainer>
        <Title>Entregas</Title>
        <SectionContainer>
          <Section
            onPress={() => setDelivered(false)}
            style={{ marginRight: 8 }}
          >
            <SectionText checked={!delivered}>Pendentes</SectionText>
          </Section>

          <Section onPress={() => setDelivered(true)}>
            <SectionText checked={delivered}>Entregues</SectionText>
          </Section>
        </SectionContainer>
      </TitleContainer>

      <List
        data={deliveries}
        keyExtractor={(delivery) => delivery.id}
        renderItem={({ item: delivery }) => (
          <DeliveryItem delivery={delivery} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
