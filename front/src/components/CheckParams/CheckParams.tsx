import React from 'react'
import s from './CheckParams.module.scss'
import { useRecoilState } from 'recoil'
import { checkSettings } from '../../state/CheckSettings'
import Button from '../Button/Button'
function CheckParams() {
  const [settings, setSettings] = useRecoilState(checkSettings)

  function btnHandler(children) {
    setSettings({
      ...settings,
      languageStyle: children.toLowerCase()
    })
  }
  return (
    <div className={s.CheckParams}>
      <h1>Corection options</h1>

      <div className={s.wrapper}>
        <form >
          <p>Language Style</p>
          <div className={s.languageBtns}>
            <Button onClick={btnHandler} style={{ marginRight: '10pt' }} state={settings.languageStyle == 'formal' ? 'active' : 'disabled'} >Formal</Button>
            <Button onClick={btnHandler} state={settings.languageStyle == 'informal' ? 'active' : 'disabled'}>Informal</Button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default CheckParams