import { atom } from 'recoil';
interface IMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const messagesAtom = atom({
  key: 'messagesAtom',
  default: [] as IMessage[],
});
