import { ProductType } from "../../types/type";
import { actions } from "../../redux/slice/product"; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Tooltip,
  TableCell,
  Snackbar,
  Alert,
  IconButton,
  Button
  
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";



type PropType = {
  product: ProductType;
};
export default function CountriesItem ({ product }: PropType) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  return (
          <Box key={product.id} sx={{ width: 280, marginRight: 0.5, my: 5}}>
              <Typography gutterBottom variant="body2">
                <h3>{product.title}</h3>
              </Typography>
              <Typography gutterBottom variant="body2">
              Category: {product.category}
              </Typography>
              <img
              style={{ width: 210, height: 118 }}
              alt={product.title}
              src={product.image}
            />
              <Typography variant="caption" color="text.secondary">
                <h2>Price : ${product.price}</h2>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                 Rating : {product.rating.count}
              </Typography>
              <div className="icons">
          <Tooltip title="Add favorite">
            <IconButton
              aria-label="add to favorites"
              onClick={handleClick}
            >
              <FavoriteIcon sx={{ color:  "gray"  }} />
            </IconButton>
          </Tooltip>
       
        <Tooltip title="Add to cart">
            <IconButton
              aria-label="add to cart"
              onClick={handleClick}
            >
              <AddShoppingCartIcon sx={{ color:  "gray"  }} />
            </IconButton>
          </Tooltip>
      
          <Tooltip title="More info">
            <Link to={`/products/${product.title}`}>
              
              <Button variant="outlined">MORE</Button>
              
            </Link>
          </Tooltip>
          <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
             add to favorite list!
            </Alert>
          </Snackbar>
        </div>
            </Box>
  );
};
