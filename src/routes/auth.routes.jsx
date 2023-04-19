import {Routes, Route} from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

// na barra / vai ser renderizado a SignIn

export function AuthRoutes() {
  return (
    <Routes>

      <Route path="/" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
     

    </Routes>
  )
}