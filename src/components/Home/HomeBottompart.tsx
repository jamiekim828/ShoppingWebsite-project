// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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
        <Div sx={{ fontSize: '22px', fontWeight: '500', fontStyle: 'italic' }}>
          {'You might also like ...'}
          {women.map((item) => (
            <Card sx={{ maxWidth: 160, height: 210 }} key={item.id}>
              <CardMedia
                component='img'
                height='200'
                image={`${item.image}`}
                alt='green iguana'
              />
            </Card>
          ))}
        </Div>
      </Box>
    </div>
  );
}
