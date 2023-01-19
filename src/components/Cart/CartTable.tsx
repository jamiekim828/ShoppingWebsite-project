import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { ProductType } from '../../types/type';
import { AppDispatch, RootState } from '../../redux/store';
import { actions } from '../../redux/slice/product';

// row data create function
function createData(
  image: string,
  title: string,
  id: number,
  price: number,
  description: string,
  category: string,
  rating: { rate: number; count: number },
  quantity: number
) {
  return { image, title, id, price, description, category, rating, quantity };
}

// alert function
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CartTable() {
  // alert
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // add to cart
  const cart = useSelector((state: RootState) => state.product.cart);
  const addToCart = (product: ProductType) => {
    dispatch(actions.addCart(product));
  };

  const emptyCart = (product: ProductType) => {
    dispatch(actions.removeCart(product));
  };

  // MUI table rows
  const rows = cart.map((item) =>
    createData(
      item.image,
      item.title,
      item.id,
      item.price,
      item.description,
      item.category,
      item.rating,
      item.quantity
    )
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='tablediv'>
      <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>NAME</TableCell>
              <TableCell align='center'>QTY</TableCell>
              <TableCell align='center'>PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell sx={{ height: '80px', textAlign: 'center' }}>
                  <img
                    src={`${item.image}`}
                    className='cart-img'
                    alt='cart-img'
                  />
                </TableCell>

                <TableCell className='cart-title' sx={{ height: '80px' }}>
                  {item.title.slice(0, 25)}
                  <br />
                  ITEM NO. {item.id}
                  <Button
                    sx={{ width: '100px', color: '#9e9e9e' }}
                    onClick={() => {
                      emptyCart(item);
                      handleClick();
                    }}
                  >
                    Remove
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity='success'
                      sx={{ width: '100%' }}
                    >
                      ITEM No.{item.id} is removed from the card.
                    </Alert>
                  </Snackbar>
                </TableCell>

                <TableCell sx={{}}>
                  <div className='quantity-check'>
                    <button
                      className='delete-btn'
                      onClick={() => {
                        dispatch(actions.deleteCart(item));
                      }}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className='add-btn'
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                </TableCell>
                <TableCell sx={{ height: '80px', textAlign: 'center' }}>
                  $ {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
