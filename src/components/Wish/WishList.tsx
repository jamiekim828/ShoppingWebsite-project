import React from 'react';
import {useState, Fragment} from "react";
import {AppDispatch, RootState} from "../../redux/store";
import  {actions} from "../../redux/slice/product";
import {useDispatch, useSelector} from "react-redux";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});



export default function WishList() {
    const wishList= useSelector((state: RootState)=> state.product.wishList);
    const dispatch = useDispatch<AppDispatch>();

    /*remove button function*/
    const handleRemove = (name: string) => {
        dispatch(actions.removeWishList(name));
    }

    /*snackbar*/
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // MUI Snackbar action
    const action = (
        <Fragment>
            <IconButton
                size='small'
                aria-label='close'
                color='primary'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </Fragment>
    );

    return (
      <div>
          {wishList.length === 0 ? (
              <Box
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      '& > :not(style)': {
                          m: 1,
                          width: 550,
                          fontSize: '2rem',
                          marginTop: '2%',
                          marginBottom: '2%',
                      },
                  }}
              >
                  <Paper elevation={10} sx={{ paddingTop: '3%' }}>
                      There is no product in wish list.
                  </Paper>
              </Box>
          ) : (
              wishList.map((product) => (
                  <div key={product.title}>
                      <Paper
                          sx={{
                              p: 2,
                              margin: 'auto',
                              marginTop: '1%',
                              marginBottom: '1%',
                              maxWidth: 500,
                              flexGrow: 1,
                              backgroundColor: (theme) =>
                                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                          }}
                      >
                          <Grid container spacing={2}>
                              <Grid item>
                                  <ButtonBase
                                      sx={{
                                          width: 128,
                                          height: 128,
                                          display: 'flex',
                                          flexDirection: 'column',
                                      }}
                                  >
                                      <Img
                                          alt='complex'
                                          src={`${product.image}`}
                                          sx={{ border: 1 }}

                                      />
                                  </ButtonBase>
                              </Grid>
                              <Grid item xs={12} sm container>
                                  <Grid item xs container direction='column' spacing={2}>
                                      <Grid item xs>
                                          <Typography
                                              gutterBottom
                                              variant='subtitle1'
                                              component='div'
                                              sx={{  fontSize: '20px' }}
                                          >
                                              <b>Product : </b>
                                              {product.title}
                                          </Typography>
                                          <Typography
                                              variant='body2'
                                              sx={{
                                                  fontSize: '17px',
                                                  textAlign: 'left',
                                                  marginLeft: '28%',
                                              }}
                                              gutterBottom
                                          >
                                              <b>Category : </b>
                                              {product.category}
                                              <br />
                                              <b>Price : </b>
                                              {product.price}
                                              <br />
                                              <b>Rating : </b>
                                              {product.rating.rate}
                                          </Typography>
                                      </Grid>
                                      <Grid item>
                                          <Typography
                                              sx={{
                                                  cursor: 'pointer',
                                                  color: '#3d5fa3',
                                                  fontWeight: '800',
                                              }}
                                              variant='body2'
                                              onClick={() => {
                                                  handleRemove(product.title);
                                                  handleClick();
                                              }}
                                          >
                                              REMOVE
                                          </Typography>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Paper>
                  </div>
              ))
          )}
          <div>
              <Snackbar
                  open={open}
                  autoHideDuration={1600}
                  onClose={handleClose}
                  action={action}
              >
                  <Alert
                      onClose={handleClose}
                      severity='warning'
                      sx={{ width: '100%' }}
                  >
                      The item has removed from your favorite
                  </Alert>
              </Snackbar>
          </div>
      </div>
  )
}
