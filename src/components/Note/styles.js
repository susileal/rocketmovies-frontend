import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  a{
    text-decoration: none;
    flex: 1;
    text-align: left;
    font-weight: 700;
    margin: 8px;
  
    color: ${({ theme}) => theme.COLORS.WHITE};
  }


  > p {
    margin-top: 15px;
    color: ${({ theme}) => theme.COLORS.GRAY_200};
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    overflow-y: auto;
  }

  > footer{
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;