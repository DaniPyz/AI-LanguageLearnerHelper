import { atom } from 'recoil';

interface ICHange {
  old?: string;
  new?: string;
}

export const changesAtom = atom({
  key: 'changesAtom',
  default: [] as ICHange,
});
