import React from 'react'
import s from './FansyInput.module.scss'

interface IFansyInput {
  input: string,
  changeValue(value: string): void
  sendRequest(e:any):void
}

export default function FansyInput({ input, changeValue, sendRequest }: IFansyInput) {

  function HandleInput(e) {
    changeValue(e.target.value)
  }

  return (
    <div className={s.FansyInput}>
      <form onSubmit={(e) => {
        e.preventDefault()
        input !== '' && sendRequest(e)
       
      }}>
        <input  value={input} onInput={HandleInput} type="text" placeholder='Введите текст' />
      </form>
    </div>
  )
}
