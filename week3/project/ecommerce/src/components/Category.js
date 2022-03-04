import React from 'react';

const Category = ({ category, filter, isActive, handleSelection }) => {
  return (
    <div>
      <button
        onClick={() => {
          filter(category);
          handleSelection(category);
        }}
        className={isActive === category ? 'isActive' : 'catergory-button'}
      >
        {category}
      </button>
    </div>
  );
};

export default Category;
