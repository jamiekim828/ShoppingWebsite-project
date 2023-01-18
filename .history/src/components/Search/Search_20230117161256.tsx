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
import { useDispatch } from "react-redux";
import { useState } from "react";
import { actions } from "../../redux/slice/product";


import TextField from "@mui/material/TextField";

export default function Search() {
    const [userInputs, setUserInput] = useState<string>("");

    const dispatch = useDispatch();
    function getValue(event: React.ChangeEvent<HTMLInputElement>) {
        const result = event.target.value;
        setUserInput(result);

        dispatch(actions.getProductDetail(userInputs));
    }
    function searchHandler() {
        setUserInput("");
        dispatch(actions.getProductDetail(userInputs));
    }

    function key(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 1) {
            searchHandler();
        }
    }
    return (
        <div className="Search_Form">
            <TextField
                id="standard-search"
                label="Enter country name"
                variant="standard"
                onChange={getValue}
                value={userInputs}
            />
        </div>
    );
}