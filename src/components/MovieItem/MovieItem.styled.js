import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovieItem = styled.li`
padding:15px 25px;
transform:scale(1);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
transition:transform .6s linear;

&:hover,&:active{
    transform:scale(1.02);

}
`

export const MovieTitle = styled.p`
max-width:300px;
text-transform:uppercase;
color: black;
font-weight:600;
margin-bottom:10px;
`

export const StyledLink = styled(Link)`
text-decoration:none;


`