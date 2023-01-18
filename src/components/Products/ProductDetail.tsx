import { ProductType } from "../../types/type";
import { Tooltip, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
  
  type PropType = {
    productDetail: ProductType;
  };
  
  export default function ProductDetail({ productDetail }: PropType) {
    return (
      <div className="productDetail">
        <div className="productImage">
          {productDetail.image}
        </div>
        <div className="info">
        <h3>{productDetail.title}</h3>
        <h3>{productDetail.category}</h3>
        <h3>{productDetail.price}</h3>
        <h3>{productDetail.description}</h3>
        <h3>{productDetail.rating.count}</h3>
        <h3>{productDetail.rating.rate}</h3>
        <div className="icons">
        <Tooltip title='Add favorite'>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon sx={{ color: 'gray' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title='Add to cart'>
          <IconButton aria-label='add to cart'>
            <AddShoppingCartIcon sx={{ color: 'gray' }} />
          </IconButton>
        </Tooltip>
        </div>
        </div>

      </div>
    );
  };
  