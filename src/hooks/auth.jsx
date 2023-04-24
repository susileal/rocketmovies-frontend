import { createContext, useContext, useState, useEffect} from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

// children - é o filho, ou seja, todas as rotas da aplicação
// JSON.stringify(user) - convertendo o objeto para um texto, já que o user é um objeto JSON
function AuthProvider({ children }){

  const [data, setData] = useState({});

  async function signIn({email, password}) {
    
    try{
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar"); 
      }
    };

  }

  // sair da aplicação
  function signOut(){
    localStorage.removeItem("@rocketmovies:token");
    localStorage.removeItem("@rocketmovies:user");

    setData({})
  }

  async function updateProfile({ user, avatarFile}) {
    
    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      

      await api.put("/users", user);

      // setItem - já serve para substituir o conteúdo

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({ user, token: data.token})
      alert("Perfil atualizado!"); 
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil"); 
      }
    };

  }

  // tem duas partes - a primeira é uma areo function, que você quer executar, sempre após a renderização do componente
  // [] - pode ser colocado o estado que quiser, mas quando esse estado mudar dispara novamente o useEffect
  // [] - quando está vazio será carregado apenas uma vez após a renderização 
  useEffect(()=>{
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");

    // garantir que tanto o token quanto o usuário tenha sido informado
    if( token && user ){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      //JSON.parse(user) - dados do usuário que estavam armazenados no formato de texto e voltou a ser um objeto
      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  
  // todas as rotas da aplicação estão sendo inseridas no - {children} 
  // JÁ ESTÁ COMPARTILHANDO OS DADOS DO USUÁRIO - user: data.user
  return(
  <AuthContext.Provider value={{
    signIn,
    signOut,
    updateProfile,
    user: data.user
    
    }}>
    {children}
  </AuthContext.Provider>
  )
}

// função que separa a exportação do 
function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};

