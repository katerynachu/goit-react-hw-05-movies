import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import { MoviesList } from './Movies.styled'

export default function Movies({movies}) {
  return (
      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </MoviesList>
  )
}
