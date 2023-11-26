
import React from 'react';
import { MovieTitle, StyledLink, StyledMovieItem } from './MovieItem.styled';
import { useLocation } from 'react-router-dom';



export default function MovieItem({movie}) {
  const imageNotFound = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637';
  const location =useLocation();

  const posterPath = movie.poster_path
  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  : imageNotFound;
  return (
    <StyledMovieItem key={movie.id}>
      <StyledLink to={`/movies/${movie.id}`} state={{from:location}}><MovieTitle>{movie.title}</MovieTitle>
      <img width={300}
          src={posterPath}
          alt="movie poster"
        /></StyledLink>
    </StyledMovieItem>
  )
}
