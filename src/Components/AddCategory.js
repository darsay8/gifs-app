import React, { useState } from 'react';
import Proptypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(c => [inputValue, ...c]);
      setInputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = { setCategories: Proptypes.func.isRequired };

export default AddCategory;
