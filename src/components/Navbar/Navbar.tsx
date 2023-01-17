import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../Assets/logo.png'


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {Switch} from "@mui/material";




//fsdoiujgsiodfjoijf
export default function Navbar() {
    const [mode,setMode]=useState(false)
const theme = createTheme({
palette: {
    mode: mode ? 'light' : 'dark'
}
})

  return (
      <div>

          <ThemeProvider theme={theme}>
              <Box sx={{flexGrow: 1}}>
                      <AppBar position="static"
                             /*style={{backgroundColor: 'pink'}}*/
                              /*sx={{

                                  bgcolor: 'transparent',

                                 }}*/
                      >
                          <Toolbar>
                              <img src={logo} alt='logo' height='80px' width='80px'/>
                              <Box sx={{flexGrow: 20}}/>
                              <Box sx={{display: {xs: "none", md: "flex"}}}>
                                  <Link  to="">
                                      {" "}
                                      <HomeIcon/>
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
                              <Box sx={{flexGrow: 1}}/>
                              <Box sx={{display: {xs: "none", md: "flex"}}}>
                                  <Switch onClick={() => setMode(!mode)}/>
                              </Box>

                          </Toolbar>
                      </AppBar>
                  </Box>
              {/*</Paper>*/}

          </ThemeProvider>
      </div>
  )
}
