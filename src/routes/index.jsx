import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

// importando as rotas

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  const { user } = useAuth();

  // {user ?  <AppRoutes/> : <AuthRoutes/> } - se tem um usuário <AppRoutes/>, se não <AuthRoutes/>

  return (
    <BrowserRouter>
      {user ?  <AppRoutes/> : <AuthRoutes/> }
    </BrowserRouter>
  )
}


