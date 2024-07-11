import { Axios } from '../axios';
import { IMessages } from '../interfaces';

export const sendMessage = (props: IMessages.ISendMessage) => {
  return Axios.post('/sendMessage', { ...props }).then((res) => res.data);
};
