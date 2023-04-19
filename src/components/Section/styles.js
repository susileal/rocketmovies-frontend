import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2{
   
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color:  ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_100 : theme.COLORS.WITE};

    font-size: ${({ isActive}) => isActive ? "20px" : "32px"};
   
  }
`;