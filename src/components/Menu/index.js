import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Typography } from '@mui/material';
import TurnOverLogo from '../../assets/images/turnoverbnb.png';
import { menuStyles } from '~/styles/menuStyles';
import { MenuItems } from './constants';
import { Link } from 'react-router-dom';

export default function Menu({ leftMenu, handleMenu }) {
  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={leftMenu}
        onClose={handleMenu}
        onOpen={handleMenu}
        sx={menuStyles.menuContainer}
      >
        <Grid container p="20px">
          <Typography variant="subtitle1">
            <img src={TurnOverLogo} alt="Logo" style={menuStyles.logo} />
          </Typography>
        </Grid>
        <Box
          role="presentation"
          onClick={handleMenu}
          onKeyDown={handleMenu}
          sx={250}
        >
          <List>
            {MenuItems.map(data => (
              <Link to={data.link}>
                <ListItem button>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText
                    sx={{ color: 'rgb(52, 71, 103)', fontWeight: '600' }}
                  >
                    {data.text}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
