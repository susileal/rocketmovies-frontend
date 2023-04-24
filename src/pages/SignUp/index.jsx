import { useState } from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { api } from "../../../../rocketmovies-backend/src/services/api"

import { Link, useNavigate } from 'react-router-dom';

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles";

export function SignUp() {

  // se eu quero a informação do nome, email e senha atualizada é necessário criar um estado (State) para pegas essas informações
  // useState - cria um estado
  // dentro do parenteses é informado um valor inicial - ("") - sem nada dentro é um texto vazio
  // o vetor entrega duas coisas importantes: primeiro o estado para acessar qual o valor atual do estado
  // segundo - acessa a função para atualizar o estado - setName (set + o nome do estado)
  //  onChange={e => setName(e.target.value)} - toda vez que o valor do input muda, dispara um evento
  // e.target.value - para acessar o valor

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // handleSignUp - lidar com o cadastro de usuário

  function handleSignUp(){
    if(!name || !email || !password){
      return alert(" Preencha todos os campos!");
    }

    // post - é a rota onde cadastra o usuário
    // then é executado se deu tudo certo, o catch se deu errado
    // error.response captura a mensagem (do back) de error que foi feita na api 
    // navigate("/") - leva o usuário para tele inicial
    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
        
      }
    });
  }

  return (
    <Container>
      

      <Form>
        <h1> RocketMovies</h1>
        <p> Aplicação para acompanhar tudo que assistir.</p>
        <h2> Crie sua conta </h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />  

        <Button 
          title="Cadastrar"  
          isActive 
          onClick={handleSignUp}
          />

        <Link to='/'>
        <FiArrowLeft/> Voltar para o login 
        </Link>
      

        
      </Form>

        <Background/>
      
    </Container>
  );
}