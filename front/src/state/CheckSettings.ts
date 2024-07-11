import { atom } from 'recoil';
import { IState } from '../interfaces';

export const checkSettings = atom({
  key: 'checkSettings',
  default: {
    languageStyle: 'formal',
    emphasize: false,
  } as IState.IAtomCheckSettings,
});
