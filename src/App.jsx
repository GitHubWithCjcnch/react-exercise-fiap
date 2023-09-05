import { Outlet } from 'react-router-dom'
import  Menu  from './components/Menu/Menu'
import  Rodape  from './components/Rodape/Rodape'
import './App.css'

function App() {

  return (
    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App
