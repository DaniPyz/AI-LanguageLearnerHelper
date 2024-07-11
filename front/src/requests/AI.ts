import { Axios } from '../axios';

interface ISendMessage {
  message: string;
  style: 'formal' | 'informal';
}
export const sendMessage =  (props: ISendMessage) => {
  return  Axios.post('/sendMessage', { ...props }).then((res) => res.data);
};
