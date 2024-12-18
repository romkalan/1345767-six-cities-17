import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../types/TState.ts';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
