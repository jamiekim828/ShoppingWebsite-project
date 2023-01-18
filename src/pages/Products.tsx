import { useState } from "react";
import Search from "../components/Search/Search";
import ProductsList from "../components/Products/ProductsList";

const Products = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="product">
      <Search userInput={userInput} setUserInput={setUserInput}/>
      <ProductsList userInput={userInput}/>
    </div>
  );
};

export default Products;