import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { ProductType } from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { actions } from '../../redux/slice/product';

// row data create function
function createData(image: string, title: string, id: number, price: number) {
  return { image, title, id, price };
}

export default function CartTable() {
  // cart
  const cartList = JSON.parse(localStorage.getItem('cart') || '{}');

  // add to cart
  const cart = useSelector((state: RootState) => state.product.cart);
  const addToCart = (product: ProductType) => {
    dispatch(actions.addCart(product));
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const emptyCart = (product: ProductType) => {
    dispatch(actions.removeCart(product));
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  console.log(cartList, cart);

  // MUI table rows
  const rows = cartList.map((item: ProductType) =>
    createData(item.image, item.title, item.id, item.price)
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
            {rows.map((item: ProductType) => (
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
                  ITEM NO. {item.id}
                  <Button
                    sx={{ width: '100px', color: '#9e9e9e' }}
                    onClick={() => {
                      emptyCart(item);
                    }}
                  >
                    Remove
                  </Button>
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
