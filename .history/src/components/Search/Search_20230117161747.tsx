/*import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { actions } from "../../redux/slice/product"; 

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ userInput, setUserInput }: PropType) {
  const dispatch = useDispatch();
  const productsList = useSelector(
    (state: RootState) => state.product.product
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    searchHandler();
  };

  const searchHandler = () => {
    const result = productsList.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    dispatch(actions.getProductList(result));
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search product"
        variant="standard"
        onChange={inputHandler}
        InputLabelProps={{
          style: { fontFamily: "'Nunito', sans-serif" },
        }}
      />
    </div>
  );
};*/

import React from "react";
import "./SearchForm.css";

type PropType = {
  userInput : string;
  setUserInput : React.Dispatch<React.SetStateAction<string>>
};

export default function SearchForm({ userInput, setUserInput }: PropType) {
  function userInputHandler(event: React.ChangeEvent<HTMLInputElement>){
    const input = event.target.value;
    setUserInput(input);
  }
  console.log(userInput, "user input in search form");
  return (
    <div className="searchForm">
      <form>
        <label>Enter the name : </label>
        <input type="text" onChange={userInputHandler}></input>
      </form>
    </div>
  );
}