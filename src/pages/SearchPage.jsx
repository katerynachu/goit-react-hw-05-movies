import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';
import { SearchButton, SearchContainer, SearchInput, SearchResultsContainer } from 'components/SearchItem/SearchItem.styled';
import searchMovies from 'components/utils/getSearchMovie';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';




export default function SearchItem() {
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);


    const [params, setParams] = useSearchParams();

    const updateQuery = (value) => {
      params.set('query', value);
      setParams(params);
    };
  
    const handleSearch = async (query) => {
      try {
        const data = await searchMovies(query);
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      const queryParam = params.get('query');
      if (queryParam) {
        handleSearch(queryParam);
        setsearchQuery(queryParam);
      }
    }, [params]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchQuery);
      updateQuery(searchQuery);
    };
  
    
  return (
    <SearchContainer>
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Enter movie title"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </form>
    {loading ? (
      <Loader />
    ) : (
      searchResults.length > 0 && (
        <SearchResultsContainer>
          <h2>Search Results</h2>
          <Movies movies={searchResults} />
        </SearchResultsContainer>
      )
    )}
  </SearchContainer>
  )
}



