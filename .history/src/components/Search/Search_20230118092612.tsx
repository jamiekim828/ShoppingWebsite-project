import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { actions } from "../../redux/slice/product"; 


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchProductsData } from "../../redux/thunk/product";

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  filter : string;
  setFilter : React.Dispatch<React.SetStateAction<string>>;
};


export default function Search({ userInput, setUserInput, filter, setFilter }: PropType) {
  const dispatch = useDispatch<AppDispatch>();
  const productsList = useSelector(
    (state: RootState) => state.product.productList
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
  

  // filter selection handle change
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  const filterArray = [
    'Name',
    'Categiry',
    'Price',
  ];

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search product"
        variant="standard"
        onChange={inputHandler}
        value={userInput}
        InputLabelProps={{
          style: { fontFamily: "'Nunito', sans-serif" },
        }}
      />
      <div className='region-option'>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            id='demo-simple-select-helper-label'
            sx={{ fontFamily: 'nunito' }}
          >
            By Filter
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
              value=''
              onClick={() => {
                dispatch(fetchProductsData());
              }}
            >
              <em>All</em>
            </MenuItem>
            {filterArray.map((filterName) => (
              <MenuItem
                sx={{ fontFamily: 'nunito' }}
                onClick={() => {
                  dispatch(fetchByFilter(filterName));
                }}
                key={filterName}
              >
                {filterName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};