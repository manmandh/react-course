import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from './moviesSlice';

const AddMovie: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    const newMovie = {
      id: new Date().toISOString(),
      title,
      description: 'A new movie',
    };

    dispatch(addMovie(newMovie));
    setTitle('');
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
