import { atom } from 'recoil';
import { IState } from '../interfaces';

export const messagesAtom = atom({
  key: 'messagesAtom',
  default: [] as IState.IAtomMessage[],
});
