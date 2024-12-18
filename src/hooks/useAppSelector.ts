import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TState } from '../types/TState.ts';

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
