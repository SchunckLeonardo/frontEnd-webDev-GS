import { Outlet } from 'react-router'
import HeaderComp from './components/HeaderComp'
function App() {

  return (
    <>
      <HeaderComp/>
      <Outlet/>
    </>
  )
}

export default App
