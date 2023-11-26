import React from 'react'
import { HeaderWrapper, NavList, StyledNavLink } from './Header.styled';


export default function Header() {
  return (
    <HeaderWrapper>
    <nav>
      <NavList>
          <StyledNavLink to="/">Home</StyledNavLink >
          <StyledNavLink  to="/search">Movies</StyledNavLink>
      </NavList>
    </nav>
  </HeaderWrapper>
  )
}
