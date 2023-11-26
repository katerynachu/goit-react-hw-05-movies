import React from 'react'

import { NavigationBlock, NavigationItem, NavigationList, StyledLink } from './NavigationDetails.style';


export default function NavigationDetails({movieId,movie}) {
 
  return (
    <NavigationBlock>
    <NavigationList>
      <NavigationItem>
        <StyledLink to={`/movies/${movieId}/cast`}>cast</StyledLink>
      </NavigationItem>
      <NavigationItem>
        <StyledLink to={`/movies/${movieId}/reviews`}>reviews</StyledLink>
      </NavigationItem>
    </NavigationList>
  </NavigationBlock>
  )
}
