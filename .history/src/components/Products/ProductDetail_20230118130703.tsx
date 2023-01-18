import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Link as RouterLink } from "react-router-dom";
import { ProductType} from "../../types/type"; 

type PropType = {
  productDetail: ProductType;
};

export default function ProductDetail({ productDetail }: PropType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="country">
            {ProductDetail.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={ProductDetail.title}
        subheader={ProductDetail.category[0]}
        sx={{ textAlign: "left" }}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ border: "1px solid lightgrey" }}
        image={ProductDetail.image}
        alt="Paella dish"
      />
      <CardContent>
          <Typography variant="body2" color="text.secondary" component="p" align="center">
              The country belongs to <strong className="countrydetailtext">{ProductDetail.description}</strong>        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Back">
          <RouterLink to="/countries">
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
          </RouterLink>
        </Tooltip>
          <Tooltip title="Add favorite">
            <IconButton
              aria-label="add to favorites"
              
            >
              <FavoriteIcon sx={{ color:  "gray"  }} />
            </IconButton>
          </Tooltip>
       
        <Tooltip title="Add to cart">
            <IconButton
              aria-label="add to cart"
              
            >
              <AddShoppingCartIcon sx={{ color:  "gray"  }} />
            </IconButton>
          </Tooltip>
      </CardActions>
    </Card>
  );
};
