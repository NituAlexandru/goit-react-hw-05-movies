// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../API/ApiService';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        console.log(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
