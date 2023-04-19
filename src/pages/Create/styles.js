import styled from "styled-components";

// overflow-y: scroll; - deixar o header fixo e rola só a main
//  overflow-y: auto; o scroll fica oculto e só aparece se o conteúdo não couber na tela 

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 16px;
    border-radius: 8px;
  }
`;


export const Form = styled.form`

  max-width: 1137px;
  margin: 40px auto;

  >header{
    button{
      display: flex;
      align-items: center;
      margin: 40px 0 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;
    }
  
    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
        margin-right: 8px;
      }
    h1{
        font-size: 36px;
        margin-bottom: 40px;
      }
  }
  
  > div{
    display: flex ;
    gap: 40px;
    margin-bottom: 40px;
  }

  

 

  
  
`;







