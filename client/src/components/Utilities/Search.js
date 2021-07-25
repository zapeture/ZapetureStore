import React, { useState } from 'react';
import { SearchStyles } from '../../globalStyles';
import { ButtonRegular } from '../../utilityStyles';

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/products');
    }
  };
  return (
    <SearchStyles>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='q'
          placeholder='Search...'
          onChange={(e) => setKeyword(e.target.value)}
        />
        <ButtonRegular dark='dark' type='submit'>
          Search
        </ButtonRegular>
      </form>
    </SearchStyles>
  );
};

export default Search;
