import React from 'react';

const Category = ({ category, filter, isActive, handleSelection }) => {
  console.log(category);
  return (
    <div className="d-flex justify-content-center ">
      <button
        onClick={() => {
          filter(category);
          handleSelection(category);
        }}
        className="catergory-btn"
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
