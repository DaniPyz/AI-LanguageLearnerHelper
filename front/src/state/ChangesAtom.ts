import { atom } from 'recoil';
import { IState } from '../interfaces';

export const changesAtom = atom({
  key: 'changesAtom',
  default: [] as IState.IAtomCHanges,
});
