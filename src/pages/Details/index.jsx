// regra - o nome do componente tem que começar com a letra maiúscula Ex: App
// a proposta da interface é exibir alguma coisa para o usuário.
// para exibição é necessário renderizar através do return
// regra do react - um componente só retorna no máximo um elemento
import {Container, Content, Profile} from "./styles"
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
// useParams - busca pelos parâmetros que existem na nota
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../../../rocketmovies-backend/src/services/api"

import { FiArrowLeft } from 'react-icons/fi';

import { AiOutlineClockCircle } from 'react-icons/ai';



import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonStar } from "../../components/ButtonStar";
import { ButtonText } from "../../components/ButtonText";


export function Details(){

  const [data, setData] = useState(null);
  const { user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover o filme?")
    if (confirm){
     await api.delete(`/movie_notes/${params.id}`);
     navigate(-1);
    }


  }

  useEffect(() => {
    async function fetchNotes() {
    const response = await api.get(`/movie_notes/${params.id}`);
    setData(response.data)
    }

    fetchNotes();
  },[])
 
  return(
    <Container>

      <Header/>

    { 
      data &&
      <main>
        <Content>

        <button type='button' onClick={handleBack}>
          <FiArrowLeft/> Voltar
        </button>

        <div>
          <h1> {data.title} </h1>
          <ButtonStar rating={data.rating}/>
        </div>

        <Profile to="/profile">
          <img 
            src={avatarURL}
            alt={user.name}
          />
          <span> Por {user.name} </span>
          <AiOutlineClockCircle/> 
          <span> {data.updated_at} </span>

          <ButtonText
          title="Excluir filme"    
          onClick={handleRemove}
        />
        </Profile>

          

          {
            data.tags &&
            <Section>
              {
                data.tags.map( tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </Section>
          }

          <p> 
            {data.description}
          </p>

        

        </Content>


    </main>

    }
     

    </Container>
  )
} 
