import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { actions } from "../../redux/slice/product"; 


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};


export default function Search({ userInput, setUserInput }: PropType) {
  const dispatch = useDispatch();
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
            By Region
          </InputLabel>
          <Select
            labelId='demo-simple-select-helper-label'
            id='demo-simple-select-helper'
            value={region}
            label='Region'
            onChange={handleChange}
          >
            <MenuItem
              sx={{ fontFamily: 'nunito' }}
              value=''
              onClick={() => {
                dispatch(fetchCountyData());
              }}
            >
              <em>All</em>
            </MenuItem>
            {regionArray.map((regionName) => (
              <MenuItem
                sx={{ fontFamily: 'nunito' }}
                onClick={() => {
                  dispatch(fetchByRegion(regionName));
                }}
                key={regionName}
              >
                {regionName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};