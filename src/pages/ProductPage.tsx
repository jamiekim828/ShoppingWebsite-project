import React from 'react';

import Search from '../components/Search/Search';
import ProductsList from '../components/Products/ProductsList';

export default function ProductPage() {
  return (
    <div>
      <Search />
      <ProductsList />
    </div>
  );
}
