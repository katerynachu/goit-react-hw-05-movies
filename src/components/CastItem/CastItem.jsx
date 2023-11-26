import React from 'react'
import { ActorName, CastStyledItem, Characther } from './CastItem.styled';

export default function CastItem({cast}) {
    const imageNotFound = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637';
    const posterPath = cast.profile_path
  ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
  : imageNotFound;

  return (
    <CastStyledItem>
          <ActorName>Name : {cast.name}</ActorName>
        <img width={200} src={posterPath} alt="actor" />
    
        <Characther>Character : {cast.character}</Characther>
    </CastStyledItem>
  )
}
