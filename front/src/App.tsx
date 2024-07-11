
import s from './App.module.scss'
import CheckParams from './components/CheckParams/CheckParams'
import ErrorList from './components/ErrorList/ErrorList'
import MainInput from './components/MainInput/MainInput'

function App() {


  return (
    <div className={s.App}>
      <MainInput />
      <div className={s.RighSide}>
        <ErrorList />
        <CheckParams />
      </div>

    </div>
  )
}

export default App
