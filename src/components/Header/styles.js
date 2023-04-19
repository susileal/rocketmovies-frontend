import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;

  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  >h1{
    font-size: 24px;
    font-weight: 700;
    margin: auto;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div{
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 24px;
   

    strong{
      font-size: 14px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
 
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: -32px ;
  }


`;

export const Search = styled.div`
  width: 630px;
  display: flex;
  align-items: center;
 
`;

export const Logout = styled.div`
      font-size: 14px;
      font-weight: 400;
      border: none;
      background-color: transparent;
      cursor: pointer;
      text-align: right;
      color: ${({theme}) => theme.COLORS.GRAY_100};
 
`;


