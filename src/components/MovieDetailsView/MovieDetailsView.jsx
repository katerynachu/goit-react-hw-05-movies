import React from 'react';
import { format } from 'date-fns';

import { MovieDetailsWrapper,MovieDescriptionWrapper, MovieDetailsTitle, GenreList } from './MovieDetailsView.style';

export default function MovieDetailsView({ movie }) {
    const releaseYear = format(new Date(movie.release_date), 'yyyy');

    const userScore = (Math.round(movie.vote_average) / 10) * 100;

    let scoreColor = '';
    if (userScore < 30) {
      scoreColor = 'red';
    } else if (userScore >= 30 && userScore < 70) {
      scoreColor = 'orange';
    } else {
      scoreColor = 'green';
    }

    const scoreStyle = {
      color: scoreColor,
    };
  return (
    <MovieDetailsWrapper>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
      <MovieDescriptionWrapper>
        <h2>
          {movie.title} <span>({releaseYear})</span>
        </h2>
        <p style={scoreStyle}>User Score: {userScore}%</p>
        <div>
          <MovieDetailsTitle>Overview</MovieDetailsTitle>
          <p> {movie.overview}</p>
        </div>
        <div>
          <MovieDetailsTitle>Genres</MovieDetailsTitle>
          <GenreList>
            {movie.genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </GenreList>
        </div>
      </MovieDescriptionWrapper>
    </MovieDetailsWrapper>
  );
}
