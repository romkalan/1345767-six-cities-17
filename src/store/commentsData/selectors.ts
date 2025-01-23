import { TState } from '../../types/TState.ts';
import { TComment } from '../../types/TComment.ts';
import { NameSpace } from '../../consts/const.ts';

export const getComments = (state: TState): TComment[] =>
  state[NameSpace.Comments].comments;
