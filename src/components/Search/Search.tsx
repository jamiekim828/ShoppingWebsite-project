import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { actions } from "../../redux/slice/product"; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchProductsData } from "../../redux/thunk/product";
import { useState } from "react";

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};


export default function Search({ userInput, setUserInput }: PropType) {
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );
    
  

  const searchHandler = () => {
    const result = productsList.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    dispatch(actions.getProductList(result));
  };
  
  const [filter, setFilter] = useState<string>('');
  const [result, setResult] = useState<boolean>(true);


  // filter selection handle change
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  // search function on change
  const dispatch = useDispatch<AppDispatch>();
  const searchUserInput = (name: string) => {
    const result = productsList.filter((product) =>
      product.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  };

  const sortOptions = [
    'title',
    'price',
    'category',
  ];

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    searchHandler();
  };

  return (
    <div>
      <TextField
        id='standard-basic'
        label='Search product'
        variant='standard'
        value={userInput}
        onChange={inputHandler}
        InputLabelProps={{
          style: { fontFamily: "'Nunito', sans-serif" },
        }}
      />
      
      <div className='filter'>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            id='demo-simple-select-helper-label'
            sx={{ fontFamily: 'nunito' }}
          >
           Filter
          </InputLabel>
          <Select
            labelId='demo-simple-select-helper-label'
            id='demo-simple-select-helper'
            value={filter}
            label='filter'
            onChange={handleChange}
          >
            <MenuItem
              sx={{ fontFamily: 'nunito' }}
              onClick={() => {
                dispatch(fetchProductsData());
              }}
            >
              <em>All</em>
            </MenuItem>
            {sortOptions.map((item, index) => (
              <MenuItem
                sx={{ fontFamily: 'nunito' }}
                value = {item}
                key={index}
                onClick={() => {
                  dispatch(fetchProductsData());
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
