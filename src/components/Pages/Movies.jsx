// Movies.jsx
import React, { useEffect, useState } from 'react';
import { handleSearch } from '../API/ApiService';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      setQuery(searchQuery);
      searchMovies(searchQuery);
    }
  }, [searchParams]);

  const searchMovies = async query => {
    try {
      const results = await handleSearch(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const search = async event => {
    event.preventDefault();
    if (!query) return;
    navigate(`/movies?query=${query}`, { state: { from: 'search' } });
  };

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: '/movies', search: query }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
