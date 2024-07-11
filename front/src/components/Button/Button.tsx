import React, { Children } from 'react'
import s from './Button.module.scss'

interface IButton {
  children: string,
  state: 'active' | 'disabled',
  style?: object,

}
function Button({ children, state, style, onClick }: IButton) {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      onClick(children)
    }} style={{ ...style }} className={state == 'active' ? s.ButtonAct : s.ButtonInac}>
      {children}
    </button >
  )
}

export default Button