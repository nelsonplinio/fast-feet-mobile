import * as AuthTypes from './types';

export function signInRequest(deliveryman_id) {
  return {
    type: AuthTypes.SIGN_IN_REQUEST,
    payload: { deliveryman_id },
  };
}

export function signInSuccess(deliveryman) {
  return {
    type: AuthTypes.SIGN_IN_SUCCESS,
    payload: { deliveryman },
  };
}

export function signFailure() {
  return {
    type: AuthTypes.SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: AuthTypes.SIGN_OUT,
  };
}
