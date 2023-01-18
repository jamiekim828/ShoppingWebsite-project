import TextField from '@mui/material/TextField';

import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { actions } from '../../redux/slice/product';

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ userInput, setUserInput }: PropType) {
  const dispatch = useDispatch<AppDispatch>();
  const productsList = useSelector(
    (state: RootState) => state.product.productList
  );

  const searchHandler = () => {
    const result = productsList.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    dispatch(actions.getProductList(result));
  };

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
      />
    </div>
  );
}
