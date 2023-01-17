import React from 'react';
import {Link} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

export default function Navbar() {
  return (
      <div>
          <Box sx={{flexGrow: 1}}>
              <AppBar position="static">
                  <Toolbar>
                      <Typography
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{display: {xs: "none", sm: "block"}}}
                      >
                          Logo
                      </Typography>
                      <Box sx={{flexGrow: 20}}/>
                      <Box sx={{display: {xs: "none", md: "flex"}}}>
                          <Link  to="">
                              {" "}
                              <HomeIcon/>
                          </Link>
                      </Box>
                      <Box sx={{flexGrow: 1}}/>
                      <Box sx={{display: {xs: "none", md: "flex"}}}>
                          <Link  to="/products">
                              {" "}
                              <CategoryIcon/>
                          </Link>
                      </Box>
                      <Box sx={{flexGrow: 1}}/>
                      <Box sx={{display: {xs: "none", md: "flex"}}}>
                          <Link  to="/wish">
                              <FavoriteIcon />

                          </Link>
                      </Box>
                      <Box sx={{flexGrow: 1}}/>
                      <Box sx={{display: {xs: "none", md: "flex"}}}>
                          <Link  to="/cart">
                              {" "}
                              <ShoppingCartIcon/>
                          </Link>
                      </Box>

                  </Toolbar>
              </AppBar>
          </Box>
      </div>
  )
}
