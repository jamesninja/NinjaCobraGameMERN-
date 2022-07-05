import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'
import './SignIn'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button>
          <Link to="/">Home</Link>
          </Button>
          </Typography>
          <Button>
            <Link to="/booking/">voir mes réservation</Link>
          </Button>
          <Button>
            <Link to="/signin">connection</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}