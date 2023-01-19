import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// MUI
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { AppDispatch, RootState } from '../../redux/store';
import { ProductType } from '../../types/type';
import { actions } from '../../redux/slice/product';

// MUI

export default function ProductCard() {
  // get id
  const { id } = useParams();
  const productId = Number(id);

  const productList = useSelector(
    (state: RootState) => state.product.productList
  );

  const productById = productList.filter(
    (item: ProductType) => item.id === productId
  );
  const productDetail = productById[0];

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate('/');
  }

  function handleClickList(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    navigate('/products');
  }

  function handleClickListByCategory(category: string) {
    dispatch(actions.sortByCategory(category));
    navigate('/products');
  }

  // add to cart
  const cart = useSelector((state: RootState) => state.product.cart);
  const addToCart = (product: ProductType) => {
    dispatch(actions.addCart(product));
  };
  localStorage.setItem('cart', JSON.stringify(cart));

  // MUI
  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' onClick={handleClick}>
      HOME
    </Link>,
    <Link underline='hover' key='2' color='inherit' onClick={handleClickList}>
      PRODUCT LIST
    </Link>,
    <Link
      underline='hover'
      key='3'
      color='inherit'
      onClick={() => handleClickListByCategory(productDetail.category)}
    >
      {productDetail.category.toUpperCase()}
    </Link>,
    <Typography key='3' color='text.primary'>
      {productDetail.title.slice(0, 20).toUpperCase()}
    </Typography>,
  ];

  return (
    <div>
      <div className='breadcrumbs-div'>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div className='detail-div'>
        <div className='detail-img-div'>
          <img
            src={`${productDetail.image}`}
            alt='product'
            className='detail-img'
          />
        </div>
        <div>
          <div className='detail-title-div'>
            <div>{productDetail.title.slice(0, 29)}</div>
            <div className='detail-price'>$ {productDetail.price}</div>
          </div>
          <div className='size-div'>
            <Button variant='outlined' sx={{ width: '25px' }}>
              XS
            </Button>
            <Button variant='outlined' sx={{ width: '30px' }}>
              S
            </Button>
            <Button variant='outlined' sx={{ width: '30px' }}>
              M
            </Button>
            <Button variant='outlined' sx={{ width: '30px' }}>
              L
            </Button>
          </div>
          <div>
            <div className='map'>
              <LocationOnIcon sx={{ fontSize: '18px', cursor: 'pointer' }} />
              IN STORE AVAILABLITY
            </div>
            <div>
              <button className='addtobag-btn'
              onClick={() => {
                addToCart(productDetail);
              }}
              >
                ADD TO BAG</button>
              
            </div>
            <div className='freeshipping-info'>
              Free shipping on orders over 100 EUR
            </div>
          </div>
          <div>
            <div>PRODUCT NO. {productDetail.id}</div>
            <div className='description'>{productDetail.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
