import { useState } from 'react';

// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// file
import { ProductType } from '../../types/type';
import img from '../Assets/sf.png';
import photo1 from '../Assets/1.png';
import photo2 from '../Assets/2.png';
import photo3 from '../Assets/3.png';

// MUI Typography
const Div = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

// type
type PropType = {
  productsList: ProductType[];
  favoriteHandler: Function;
  goToProductDetail: Function;
  wishList: ProductType[];
};

export default function HomeBottompart({
  productsList,
  favoriteHandler,
  goToProductDetail,
  wishList,
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
    <div className='home-bottom'>
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
                    onClick={() => goToProductDetail(item)}
                  />
                  <div>
                    {wishList.some((i) => i.id === item.id) ? (
                      <FavoriteIcon
                        sx={{
                          zIndex: 1,
                          marginLeft: '5px',
                          cursor: 'pointer',
                          color: '#ff80ab',
                        }}
                        onClick={() => {
                          favoriteHandler(item);
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{
                          zIndex: 2,
                          marginLeft: '5px',
                          cursor: 'pointer',
                          color: '#ff80ab',
                        }}
                        onClick={() => {
                          favoriteHandler(item);
                        }}
                      />
                    )}
                  </div>
                </Card>
                <button
                  className='quick-shop'
                  onClick={() => {
                    goToProductDetail(item);
                  }}
                >
                  QUICK SHOP
                </button>
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
        className='add-photo'
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
        className='add-photo'
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
      <Div className='your-photo'>
        <img src={photo1} alt='1' />
        <img src={photo2} alt='2' />
        <img src={photo3} alt='3' />
      </Div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD YOU PHOTO</DialogTitle>
        <DialogContent sx={{ marginBottom: '70px', textAlign: 'center' }}>
          <DialogContentText sx={{ fontSize: '12px' }}>
            1. Upload 2. Caption 3. Submit
          </DialogContentText>
          <DialogContentText>
            Take what we make and make it yours.
          </DialogContentText>
          <img
            src={img}
            alt='drag'
            style={{ width: '300px', marginTop: '30px' }}
          />
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '30px',
          }}
        >
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
