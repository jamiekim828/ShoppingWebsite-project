import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { ProductType } from '../../types/type';

// row data create function
function createData(image: string, title: string, id: number, price: number) {
  return { image, title, id, price };
}

export default function CartTable() {
  // cart
  const cartList = JSON.parse(localStorage.getItem('cart') || '{}');

  // MUI table rows
  const rows = cartList.map((item: ProductType) =>
    createData(item.image, item.title, item.id, item.price)
  );

  return (
    <div className='tablediv'>
      <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: ProductType) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {rows.map((item: ProductType) => (
                  <div className='row' key={item.id}>
                    <TableCell>
                      <img
                        src={`${item.image}`}
                        className='cart-img'
                        alt='cart-img'
                      />
                    </TableCell>
                    <div className='cart-title'>
                      <TableCell>{item.title.slice(0, 25)}</TableCell>
                      <TableCell>ITEM NO. {item.id}</TableCell>
                      <Button sx={{ width: '100px', color: '#9e9e9e' }}>
                        Remove
                      </Button>
                    </div>
                    <TableCell
                      sx={{
                        display: 'flex',
                        marginLeft: '30px',
                        marginRight: '30px',
                      }}
                    >
                      <Button sx={{ width: '25px', height: '50px' }}>-</Button>

                      <Button sx={{ width: '25px', height: '50px' }}>+</Button>
                    </TableCell>
                    <TableCell>$ {item.price}</TableCell>
                  </div>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
