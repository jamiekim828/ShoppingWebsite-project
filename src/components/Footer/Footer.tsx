import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <div className='footer'>
            <Box sx={{ flexGrow: 1, position: "relative", textAlign: "center" }}>
                <AppBar
                    position="static"
                    sx={{  height: "100px" }}
                >
                    <Toolbar>
                        <Typography
                            variant="body1"
                            noWrap
                            component="div"
                            sx={{ display: "block", margin: "0 20px" }}
                        >
                            <CopyrightIcon fontSize="small" /> E-Commerce Website
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ margin: "0 20px" }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <WhatsAppIcon />
                            </IconButton>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>

    );
}
