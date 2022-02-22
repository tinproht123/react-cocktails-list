import React from 'react';

import SearchForm from './SearchForm';
import CocktailsList from './CocktailsList';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailsList />
    </div>
  );
};

export default Home;
