import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

// flex - ocupa todo o espaço que está disponível
// background-size: cover; - para a imagem ficar bem preenchida 

export const Container = styled.div`
  
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  h2 {
    font-size: 24px;
    margin: 48px 0;
  
  }

  p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  a{
    display: flex;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  svg{
      font-size: 16px;
      margin-right: 8px;
    }
  
  `;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  
  `;

