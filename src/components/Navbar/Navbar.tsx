import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

export default function Navbar() {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? 'light' : 'dark',
    },
  });

  const wishList = useSelector((state: RootState) => state.product.wishList);
  const cart = useSelector((state: RootState) => state.product.cart);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Toolbar>
            <Link to='/'>
              <img src={logo} alt='logo' height='80px' width='80px' />
              </Link>
              <Box sx={{ flexGrow: 20 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to='/'>
                  <HomeIcon sx={{ color:"white" }}/>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to='/products'>
                  <AppsIcon sx={{ color:"white" }}/>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to='/wish'>
                  <Badge badgeContent={wishList.length} color='error'>
                    <FavoriteIcon sx={{ color:"white" }}/>
                  </Badge>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to='/cart'>
                  <Badge badgeContent={cart.length} color='error'>
                    <ShoppingCartIcon sx={{ color:"white" }}/>
                  </Badge>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Switch onClick={() => setMode(!mode)} />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}
