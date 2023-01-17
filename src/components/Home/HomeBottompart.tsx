import { useState } from 'react';

// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// file
import { ProductType } from '../../types/type';

// MUI Typography
const Div = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

// type
type PropType = {
  productsList: ProductType[];
  addFavorite: Function;
};

export default function HomeBottompart({
  productsList,
  addFavorite,
}: PropType) {
  // MUI
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // filter women's
  const women = productsList.filter((item) => item.category.includes('women'));

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '30%',
          textAlign: 'center',
          marginTop: '3rem',
          marginBottom: '3rem',
        }}
      >
        <Div
          sx={{
            fontSize: '22px',
            fontWeight: '500',
            fontStyle: 'italic',
          }}
        >
          {'You might also like ...'}
          <div style={{ display: 'flex', marginTop: '2rem' }}>
            {women.map((item) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  width: '30%',
                }}
                key={item.id}
              >
                <Card
                  sx={{
                    height: 200,
                    marginRight: '4px',
                    marginLeft: '4px',
                    textAlign: 'left',
                  }}
                  key={item.id}
                >
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    component='img'
                    height='170'
                    image={`${item.image}`}
                    alt='green iguana'
                  />
                  <FavoriteBorderIcon
                    sx={{ zIndex: 2, marginLeft: '5px', cursor: 'pointer' }}
                    onClick={() => addFavorite(item)}
                  />
                </Card>
                <button className='quick-shop'>QUICK SHOP</button>
                <p className='title'>{item.title.slice(0, 10)}</p>
                <p className='price'>$ {item.price}</p>
              </div>
            ))}
          </div>
        </Div>
      </Box>
      <p style={{ fontSize: '18px', fontWeight: '600' }}>
        Show us how you wear it
      </p>
      <Button
        variant='outlined'
        onClick={handleClickOpen}
        sx={{
          borderRadius: '30px',
          border: '2px solid #bdbdbd',
          color: '#212121',
          fontWeight: '600',
          height: '50px',
          width: '180px',
          marginRight: '20px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#ffe082',
            color: '#212121',
            border: '2px solid #ffe082',
          },
        }}
      >
        Add your photo
      </Button>
      <Button
        variant='outlined'
        sx={{
          borderRadius: '30px',
          border: '2px solid #bdbdbd',
          color: '#212121',
          fontWeight: '600',
          height: '50px',
          width: '180px',
          marginLeft: '20px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#ffe082',
            color: '#212121',
            border: '2px solid #ffe082',
          },
        }}
      >
        View gallery
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD YOU PHOTO</DialogTitle>
        <DialogContent sx={{ marginBottom: '70px', textAlign: 'center' }}>
          <DialogContentText sx={{ fontSize: '12px' }}>
            1. Upload 2. Caption 3. Submit
          </DialogContentText>
          <DialogContentText>
            Take what we make and make it yours.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Computer</Button>
          <Button onClick={handleClose}>Facebook</Button>
          <Button onClick={handleClose}>Instagram</Button>
          <Button
            onClick={handleClose}
            sx={{ color: '#d50000', fontWeight: '600' }}
          >
            X
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
