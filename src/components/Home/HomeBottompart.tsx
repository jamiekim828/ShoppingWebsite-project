// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
};

export default function HomeBottompart({ productsList }: PropType) {
  const women = productsList.filter((item) => item.category.includes('women'));

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '30%',
          textAlign: 'center',
          marginTop: '3rem',
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
              >
                <Card
                  sx={{
                    height: 180,
                    marginRight: '4px',
                    marginLeft: '4px',
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
                  <FavoriteBorderIcon sx={{ zIndex: 1 }} />
                </Card>
                <button className='quick-shop'>QUICK SHOP</button>
                <p className='title'>{item.title.slice(0, 10)}</p>
                <p className='price'>$ {item.price}</p>
              </div>
            ))}
          </div>
        </Div>
      </Box>
    </div>
  );
}
