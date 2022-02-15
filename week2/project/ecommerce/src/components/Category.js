import React from 'react';

const Category = ({ category, filter, isActive, handleSelection }) => {
  return (
    <div>
      <button
        onClick={() => {
          filter(category);
          handleSelection(category);
        }}
        className="catergory-button"
        style={{
          backgroundColor: isActive === category ? 'lightblue' : '',
        }}
      >
        {category}
      </button>
    </div>
  );
};

export default Category;
