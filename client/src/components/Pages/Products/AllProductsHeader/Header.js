import React from 'react';

const Header = () => {
  return (
    <>
      <h2>All Products</h2>
      <select>
        <option>Default</option>
        <option>Sort by price</option>
        <option>Sort by popularity</option>
        <option>Sort by rating</option>
        <option>Sort by sale</option>
      </select>
    </>
  );
};

export default Header;
