// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../API/ApiService';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  const posterURL = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    const genres = movieDetails.genres.map(genre => genre.name).join(', ');
    
  return (
    <div className={styles.movieDetails}>
      <img
        src={posterURL}
        alt={`Poster for ${movieDetails.title}`}
        className={styles.poster}
      />
      <div className={styles.details}>
        <h1>
          {movieDetails.title} (
          {new Date(movieDetails.release_date).getFullYear()})
        </h1>
        <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
