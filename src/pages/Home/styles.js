import styled from "styled-components";
import { Link } from 'react-router-dom';


// rows são linhas
//  grid-template-areas:  faz a distribuição do grid
//  overflow-y: scroll; - quando a barrinha não der faz a distribuição dele e só rola o que será visualizado
// overflow-y: auto; - ativa só quando o conteúdo não couber mais na tela

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

`;


export const Content  = styled.div`
 
  grid-area: content;
  padding: 0 123px;
  overflow-y: auto;

  >header{
    display: flex;
    justify-content: space-between;
    margin: 50px 0 40px;
    
    h1{
      font-size: 32px;
    }
  }

  
  
`;

export const NewNote = styled(Link)`
  width: 207px;
  height: 48px;

  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    margin-right: 8px;
  }
`;



