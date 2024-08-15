import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { removeMovie } from './moviesSlice';

const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => dispatch(removeMovie(movie.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
