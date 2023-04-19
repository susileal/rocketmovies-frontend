import styled from "styled-components";

// se tiver ativo é laranja se não tiver é cinza
export const Container = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: ${({ theme}) => theme.COLORS.PINK};
  border: none;
  font-size: 20px; 

  .star{
    margin-right: 8px;
  }

 
`;


