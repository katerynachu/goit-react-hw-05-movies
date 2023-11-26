import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

export const NavigationBlock = styled.nav`
padding:20px 20px 20px 30px;
background-color: #dedede;
`

export const NavigationList = styled.ul`
list-style: none;
display:flex;
gap: 20px;
`
export const NavigationItem = styled.li`
padding:5px;
`
export const StyledLink = styled(NavLink)`
text-decoration:none;
font-weight:700;
color: black;
transition: color .7s linear;

&:hover,&:active{
    color: red;
}
`