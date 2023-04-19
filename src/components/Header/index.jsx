import { Container, Profile, Search, Logout} from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";


import { api } from "../../../../aplicacaonode/src/services/api"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiSearch } from 'react-icons/fi';
import { Input } from '../Input';


export function Header({ onHeaderChange = null }){
  
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  function handleHeaderChange({ target }) {
    if (onHeaderChange) {
      const newValue = target.value;
      onHeaderChange(newValue);
    }
  }


  return(
    <Container>
        <h1>RocketMovies</h1>
    
  
    <Search>
      <Input 
        placeholder="Pesquisar pelo título" 
        icon={FiSearch}
        onChange={handleHeaderChange}
       
      />
    </Search>

      <div>
        <strong>{user.name}</strong>
       <Logout onClick={handleSignOut}>
          sair 
        </Logout> 
      </div>  

    <Profile to="/profile">
      <img src={avatarURL}
        alt={user.name}
       />
    
    </Profile>


    


    </Container>
  )

}