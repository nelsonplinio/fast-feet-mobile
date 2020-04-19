import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import {
  Container,
  Header,
  Title,
  Content,
  Card,
  Description,
  Created,
} from './styles';

export default function Problems() {
  const { params } = useRoute();

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(
        `/delivery/${params.delivery.id}/problems`
      );
      setProblems(
        response.data.list.map((problem) => ({
          ...problem,
          createdFormatted: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
        }))
      );
    }

    loadProblems();
  }, [params.delivery.id]);

  return (
    <Container>
      <Header>
        <Title>{params.delivery.product}</Title>
      </Header>
      <Content
        data={problems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(problem) => String(problem.id)}
        renderItem={({ item: problem }) => (
          <Card>
            <Description>{problem.description}</Description>
            <Created>{problem.createdFormatted}</Created>
          </Card>
        )}
        contentContainerStyle={{
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      />
    </Container>
  );
}
