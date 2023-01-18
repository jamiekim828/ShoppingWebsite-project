import { ProductType } from '../../types/type';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Tooltip, Snackbar, Alert, IconButton, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchOneProductData } from '../../redux/thunk/product';

type PropType = {
  product: ProductType;
};
export default function CountriesItem({ product }: PropType) {
  // MUI
  const [open, setOpen] = useState(false);

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

  // navigtate
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toDetail = (p: ProductType) => {
    dispatch(fetchOneProductData(p.id));
    navigate(`/products/${p.id}`);
  };

  return (
    <Box
      key={product.id}
      sx={{
        width: 280,
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 20px #e0e0e0',
      }}
    >
      <img
        className='list-item-img'
        style={{
          width: 210,
          height: 270,
          marginTop: '15px',
          cursor: 'default',
        }}
        alt={product.title}
        src={product.image}
      />
      <Typography
        gutterBottom
        variant='body2'
        sx={{
          height: '28px',
          fontSize: '18px',
          fontWeight: '700',
          marginTop: '10px',
        }}
      >
        {product.title.slice(0, 24)}
      </Typography>
      <Rating
        name='half-rating-read'
        defaultValue={product.rating.rate}
        precision={0.5}
        readOnly
      />
      <Typography
        variant='caption'
        color='warning'
        sx={{
          fontSize: '14px',
          fontWeight: '600',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        $ {product.price}
      </Typography>

      <div className='icons'>
        <Tooltip title='Add favorite'>
          <IconButton aria-label='add to favorites' onClick={handleClick}>
            <FavoriteIcon sx={{ color: 'gray' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title='Add to cart'>
          <IconButton aria-label='add to cart' onClick={handleClick}>
            <AddShoppingCartIcon sx={{ color: 'gray' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title='More info'>
          <Button
            variant='outlined'
            sx={{ height: '30px', width: '80px', backgroundColor: '#fafafa' }}
            onClick={() => {
              toDetail(product);
            }}
          >
            MORE
          </Button>
        </Tooltip>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            {product.title.slice(0, 10)} is added to the wishlist
          </Alert>
        </Snackbar>
      </div>
    </Box>
  );
}
