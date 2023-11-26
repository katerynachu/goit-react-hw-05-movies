import styled from 'styled-components';
import {  Link  } from 'react-router-dom';


export const StyleBtnGoBack = styled(Link)`
margin-top:20px;
margin-left:30px;
display: inline-block;
text-decoration: none;
text-transform:uppercase;
 padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border:1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  transition: all .5s linear;

&:hover,&:focus{
    background-color: white;
    color: black;
    border-color: black;
}
`



