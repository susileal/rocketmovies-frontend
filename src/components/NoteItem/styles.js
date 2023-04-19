import styled from "styled-components";

// se é um novo item fica mais claro, se não fica mais escuro
export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme}) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button{
    border: none;
    background: none;

  }

  .button-delete{
    color: ${({ theme}) => theme.COLORS.PINK};
    font-size: 24px;
  }

  .button-add{
    color: ${({ theme}) => theme.COLORS.PINK};
    font-size: 24px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme}) => theme.COLORS.WHITE};

    background: transparent;
    border: none;

    &:placeholder{
      color: ${({ theme}) => theme.COLORS.GRAY_300};
    }
    
  }


`;