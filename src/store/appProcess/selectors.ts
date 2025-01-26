import { TState } from '../../types/TState.ts';
import { TCityName } from '../../types/TCityName.ts';
import { NameSpace } from '../../consts/const.ts';

export const getCurrentCityName = (state: TState): TCityName =>
  state[NameSpace.App].city;
