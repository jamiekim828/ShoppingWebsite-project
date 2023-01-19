import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { actions } from '../../redux/slice/product';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchProductsData } from '../../redux/thunk/product';

import './Search.css';

type PropType = {
  userInput: string;
  filter: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Search({
  userInput,
  filter,
  setUserInput,
  setFilter,
  setSearchResult,
}: PropType) {
  const dispatch = useDispatch<AppDispatch>();

  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );

  // search
  const searchHandler = () => {
    const result = productsList.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    dispatch(actions.getProductList(result));
    if (result.length === 0) {
      setSearchResult(false);
    }
  };

  // filter selection handle change
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    searchHandler();
  };

  const category = productsList.map((item) => item.category);
  const categoryList = category.filter((c, index) => {
    return category.indexOf(c) === index;
  });

  return (
    <div className='search-container'>
      <TextField
        id='standard-basic'
        label='Search by name'
        variant='standard'
        value={userInput}
        onChange={inputHandler}
        InputLabelProps={{
          style: { fontFamily: 'Montserrat' },
        }}
      />
      <div>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-standard-label'>Sort</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={filter}
            onChange={handleChange}
            label='Sort'
          >
            <MenuItem
              value=''
              onClick={() => {
                dispatch(fetchProductsData());
              }}
            >
              <em>All</em>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(actions.sortByName(productsList));
              }}
            >
              Name
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(actions.sortByPrice(productsList));
              }}
            >
              Price
            </MenuItem>
            {categoryList.map((c) => (
              <MenuItem
                key={c}
                onClick={() => {
                  dispatch(actions.sortByCategory(c));
                }}
              >
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
