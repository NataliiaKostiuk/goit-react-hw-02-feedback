import styled from 'styled-components';
export const BtnContainer = styled.div`
display: flex;
gap: 15px;
align-items: center;
justify-content: center`

export const Btn = styled.button`
  border: 1px solid rgb(9, 9, 37);
  border-radius:5%;
  padding: 7px 0;
  min-width: 70px;
background-color: cccccc;
transition: background-color 1250ms cubic-bezier(0.4, 0, 0.2, 1);
color:rgb(9, 9, 37);
 &:hover {
    background-color:rgb(83, 83, 231) ;
  }`
