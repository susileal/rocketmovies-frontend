import { FiArrowLeft} from 'react-icons/fi';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../aplicacaonode/src/services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"


import { Container, Form} from "./styles";

export function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");


  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleAddTag(){
    setTags( prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags( prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){

    if(!title){
      return alert("Digite o título do filme");
    }

    if(!rating && (rating < 1 || rating > 5)){
      return alert("Você precisa digitar o número entre 1 e 5");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar, ou deixe o campo vazio.")
    }
    
    await api.post("/movie_notes", {
      title,
      description,
      rating,
      tags,
    });

   
    alert("Filme adicionado com sucesso com sucesso");
    navigate(-1);
    
    }

   
  return (
    <Container>
      <Header/>
  
    <main>
      <Form>

        <header>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft/> Voltar
        </button>
          <h1> Novo filme </h1>
        </header>
        
      <div>
      <Input 
        placeholder="Título"
        onChange={e => setTitle(e.target.value)}
      />
      <Input 
        placeholder="Sua nota (de 0 a 5)"
        onChange={e => setRating(e.target.value)}
      />
        
      </div>

      <Textarea 
        placeholder="Observações"
        onChange={e => setDescription(e.target.value)}
      />
      

      <Section title="Marcadores" isActive>
        <div className="tags">
          {
            tags.map((tag, index) => (
              <NoteItem 
              key={String(index)}
              value={tag}
              onClick={( ) => handleRemoveTag(tag)}
              />
              
            ))
          }
          <NoteItem 
            isNew 
            placeholder="Nova marcador"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />


        </div>
      </Section>

      <div class="button">
        <Button title="Exibir Filme" />
        <Button 
          title="Salvar alterações" 
          isActive
          onClick={handleNewNote}
        />
      </div>

      </Form>
    </main>
    </Container>
  )
}