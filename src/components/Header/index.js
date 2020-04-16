import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Image,
  Profile,
  Greeting,
  Name,
  LogoutButton,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Image nameOfUser={profile.name} source={{ uri: profile.avatar.url }} />
      <Profile>
        <Greeting>Bem vindo de volta, </Greeting>
        <Name numberOfLines={1}>{profile.name}</Name>
      </Profile>
      <LogoutButton onPress={handleLogout}>
        <Icon name="logout" size={26} color="#E74040" />
      </LogoutButton>
    </Container>
  );
}
