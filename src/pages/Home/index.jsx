import { FiPlus} from 'react-icons/fi';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"


import { Container, Content, NewNote } from "./styles";

import { Note } from "../../components/Note"
import { Header } from "../../components/Header"


export function Home() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`);

  }

  function handleHeaderChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie_notes?title=${searchTerm}`);
      setMovies(response.data)
    }
    fetchMovies();
  },[searchTerm])

  return (
    <Container>

     
      <Header onHeaderChange={handleHeaderChange}/>

      <Content>
        
      <header>  

        <h1> Meus Filmes </h1>
    
        <NewNote to="/create">
          <FiPlus/>
          Adicionar Filmes     
        </NewNote>
      
      </header>

      { 
          movies.map(movie => (
            <Note 
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))
         }

       
      </Content>

     
      
    </Container>
  )
}