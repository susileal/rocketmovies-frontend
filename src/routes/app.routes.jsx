import {Routes, Route} from "react-router-dom"

import { Create } from "../pages/Create"
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { Profile } from "../pages/Profile"

// na barra / vai ser renderizado a Home
// Details é diferente, pq precisa do código da nota para exibir ele

export function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/details/:id" element={<Details/>}/>

    </Routes>
  )
}