import React, { useState } from 'react'
import s from './MainInput.module.scss'
import FansyInput from '../FansyInput/FansyInput'
import Message from '../Message/Message'
import { Axios } from '../../axios'
import { sendMessage } from '../../requests/AI'
import { useRecoilState, useRecoilValue } from 'recoil'
import { messagesAtom } from '../../state/MessagesAtom.ts'
import { checkSettings } from '../../state/CheckSettings.ts'
import { changesAtom } from '../../state/ChangesAtom.ts'




function MainInput() {

  const [inputValue, setInputValue] = useState<string>('')
  const [messages, setMessages] = useRecoilState(messagesAtom)
  const [changes, setChanges] = useRecoilState(changesAtom)
  const { languageStyle } = useRecoilValue(checkSettings)

  async function userMessagesHandler() {
    setMessages(prev => [...prev,
    {
      role: 'user',
      content: inputValue
    }
    ])
    setInputValue('')
 
    sendMessage({
      message: inputValue,
      style: languageStyle
    }).then(
      res => {
        console.log(res)
        setChanges(res.changes)
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: res.corrected_string
        }])

      }
    )
    console.log(messages)
  }



  return (
    <div className={s.MainInput}>
      <div className={s.MessagesWrapper}>
        {
          messages.map((message, i) => (
            <Message key={i} {...message} />
          ))
        }

      </div>
      <FansyInput input={inputValue} changeValue={value => setInputValue(value)} sendRequest={userMessagesHandler} />
    </div>
  )
}

export default MainInput