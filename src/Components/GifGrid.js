import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <div className="grid-container">
      <h3 className="category-title animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {gifs.map(gif => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
