import { TState } from '../../types/TState.ts';
import { AuthorizationStatus, NameSpace } from '../../consts/const.ts';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
