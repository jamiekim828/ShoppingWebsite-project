import { useState } from 'react';
import Search from '../components/Search/Search';
import ProductsList from '../components/Products/ProductsList';

const Products = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [searchResult, setSearchResult] = useState(true);

  return (
    <div className='product'>
      <Search
        userInput={userInput}
        setUserInput={setUserInput}
        setSearchResult={setSearchResult}
        filter={filter}
        setFilter={setFilter}
      />
      <ProductsList
        userInput={userInput}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
    </div>
  );
};

export default Products;
