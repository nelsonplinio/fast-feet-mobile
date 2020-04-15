import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import * as AuthTypes from './types';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliveryman_id } = payload;

    const response = yield call(api.post, '/deliveryman/sessions', {
      deliveryman_id,
    });

    const { deliveryman } = response.data;

    yield put(signInSuccess(deliveryman));
  } catch (err) {
    if (err.response && err.response.data) {
      Alert.alert('Falha no login', err.response.data.error);
    } else {
      Alert.alert(
        'Falha no login',
        'Não foi possivel realizar login, verifique seus dados.'
      );
    }

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  api.defaults.headers.Authorization = `bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
]);
