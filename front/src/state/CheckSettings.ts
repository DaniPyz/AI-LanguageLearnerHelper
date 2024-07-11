import { atom } from 'recoil';

interface ICheckSettings {
  languageStyle: 'formal' | 'informal';
  emphasize: boolean;
}
export const checkSettings = atom({
  key: 'checkSettings',
  default: {
    languageStyle: 'formal',
    emphasize: false,
  } as ICheckSettings,
});
