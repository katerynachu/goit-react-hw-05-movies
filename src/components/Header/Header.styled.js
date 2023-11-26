import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


export const HeaderWrapper = styled.header`
padding:20px 15px;
background-color:#dedede;
`;
export const NavList = styled.ul`
list-style: none;
display:flex;
gap: 20px;
`
export const StyledNavLink = styled(NavLink)`
text-decoration:none;
color: black;
font-size:24px;
font-weight:700;
transition:color .5s linear;

&:hover,&:active{
    color: red;
}
`