import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl } from 'react-native';
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
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(true);
  const [deliveries, setDeliveries] = useState([]);
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    async function loadDelivery() {
      setRefreshing(true);
      const response = await api.get(`/deliveryman/${profile.id}/deliveries`, {
        params: { delivered },
      });

      setDeliveries(response.data);
      setRefreshing(false);
    }

    loadDelivery();
  }, [page, delivered, profile.id]);

  const onRefresh = useCallback(() => {
    setPage(1);
  }, []);

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
        refreshing={refreshing}
        keyExtractor={(delivery) => delivery.id}
        renderItem={({ item: delivery }) => (
          <DeliveryItem delivery={delivery} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
