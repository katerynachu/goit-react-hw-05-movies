import searchMovies from 'components/utils/getSearchMovie';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function SearchItem() {
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const history = useHistory();
    
    const handleSearch = async () => {
        try {
          if (searchQuery.trim() !== '') {
            const data = await searchMovies(searchQuery);
            setSearchResults(data.results);
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      const navigateToMovieDetails = (movieId) => {
        history.push(`/movies/${movieId}`);
      };

  return (
    <div>
    <input
      type="text"
      placeholder="Enter movie title"
      value={searchQuery}
      onChange={(e) => setsearchQuery(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
    {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id} onClick={() => navigateToMovieDetails(movie.id)}>
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
      )}
  </div>
  )
}
