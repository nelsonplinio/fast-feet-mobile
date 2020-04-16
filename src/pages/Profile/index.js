import React from 'react';
import { parseISO, format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Image,
  DataContainer,
  Label,
  Data,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => ({
    ...state.user.profile,
    createdAtFormatted: format(
      parseISO(state.user.profile.created_at),
      'dd/MM/yyyy'
    ),
  }));

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Image source={{ uri: profile.avatar.url }} nameOfUser={profile.name} />

      <DataContainer>
        <Label>Nome completo</Label>
        <Data>{profile.name}</Data>
      </DataContainer>

      <DataContainer>
        <Label>E-mail</Label>
        <Data>{profile.email}</Data>
      </DataContainer>

      <DataContainer>
        <Label>data de cadastro</Label>
        <Data>{profile.createdAtFormatted}</Data>
      </DataContainer>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
