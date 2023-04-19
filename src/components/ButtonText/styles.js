import styled from "styled-components";

// se tiver ativo é laranja se não tiver é cinza
export const Container = styled.button`
  background: none;
  color: ${({ theme}) => theme.COLORS.PINK};
  border: none;
  font-size: 16px; 
`;