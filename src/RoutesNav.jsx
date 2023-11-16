import { Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Infos from './views/Infos'
import LayoutDefault from './layoutDefault'

export default function RoutesNav() {

  return (
    <>
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route path="/login" element={<Login />} />
            <Route path="/infos" element={<Infos />} />
          </Route>
        </Routes>
    </>
  )
}