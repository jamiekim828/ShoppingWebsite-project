import { useState } from 'react';
// MUI
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-material-ui-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// File
import { ProductType } from '../../types/type';

// MUI Typography
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

// type
type PropType = {
  productsList: ProductType[];
  addFavorite: Function;
};

export default function HomeMidpart({ productsList, addFavorite }: PropType) {
  const fiveStars = productsList.filter((item) => item.rating.rate > 3);

  const [index, setIndex] = useState(0);

  const arrowIconHandler = (direction: string) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = index + increment;
    setIndex(newIndex);

    if (index === 0) {
      setIndex(4);
    }
    if (index === fiveStars.length - 1) {
      setIndex(3);
    }
  };

  return (
    <div>
      <div
        className='new-arrivals'
        style={{ marginTop: '3rem', marginBottom: '5rem' }}
      >
        <p style={{ marginRight: '3rem', fontSize: '20px' }}>
          Shop New Arrivals
        </p>
        <button>Shop Women</button>
        <button>Shop Men</button>
        <button>Shop Girls</button>
        <button>Shop Boys</button>
      </div>
      <Box
        sx={{
          width: '100%',
          height: '30%',
          textAlign: 'center',
          marginTop: '3rem',
        }}
      >
        <Div sx={{ fontSize: '20px' }}>{'All-time best sellers'}</Div>
        <Div
          sx={{
            fontSize: '17px',
            paddingTop: '0px',
            marginTop: '0px',
            color: 'gray',
          }}
        >
          {'Five-star essentials'}
        </Div>
        <Carousel
          NextIcon={
            <ChevronRightIcon
              onClick={() => {
                arrowIconHandler('right');
              }}
            />
          }
          PrevIcon={
            <ChevronLeftIcon
              onClick={() => {
                arrowIconHandler('left');
              }}
            />
          }
          fullHeightHover={false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          sx={{ height: 350 }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {fiveStars.slice(index, index + 4).map((item) => (
              <Grid xs={3} key={item.id}>
                <Card sx={{ maxWidth: 345, height: 340 }}>
                  <CardActionArea
                    sx={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      sx={{ objectFit: 'contain' }}
                      component='img'
                      height='240'
                      image={`${item.image}`}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h6'
                        component='div'
                        sx={{
                          height: '30px',
                          fontSize: '16px',
                          marginBottom: '0px',
                        }}
                      >
                        {item.title.slice(0, 19)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: 'xlarge',
                        cursor: 'pointer',
                      }}
                      onClick={() => addFavorite(item)}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Carousel>
      </Box>
    </div>
  );
}
