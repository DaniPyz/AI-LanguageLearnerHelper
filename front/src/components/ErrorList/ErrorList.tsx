import React from 'react'
import s from './ErrorList.module.css'
import { useRecoilState } from 'recoil'
import { changesAtom } from '../../state/ChangesAtom'

function ErrorList() {
  const [changes, setChanges] = useRecoilState(changesAtom)
  console.log('Изменения ', changes)
  return (
    <div className={s.ErrorList}>
      {

        changes.map((change, index) => {
         

          return <div key={index} className={s.ErrorItem}>{change.old} <span>{change.new}</span></div>
        })
      }

    </div>
  )
}

export default ErrorList