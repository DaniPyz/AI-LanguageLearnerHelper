import s from './Message.module.css'

interface IMessage {
  role: 'assistant' | 'user',
  content: string,
}

function Message({ role, content }: IMessage) {

  const who = role == 'user' ? s.MessageMine : s.MessageAi

  return (
    <div className={who}>
      <p>{role == 'user' ? 'Dapy' : 'AI'}</p>
      <span>{content}</span>
    </div>
  )
}

export default Message