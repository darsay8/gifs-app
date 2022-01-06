import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <h2>Gifs App</h2>
      <p>Get images from Giphy</p>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
