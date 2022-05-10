import React, { useCallback, useState } from 'react';
import { Button, Grid, MenuItem, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { topMenuStyles } from '~/styles/menuStyles';
import { useHistory } from 'react-router-dom';

export default function TopMenu({ handleMenu }) {
  const [anchor, setAnchor] = useState(null);
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = useCallback(event => {
    setAnchor(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchor(false);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');

    return history.push('/login');
  }, [history]);

  return (
    <Grid container justifyContent="space-between" sx={topMenuStyles.container}>
      <Grid item xs={2}>
        <Button type="button" onClick={handleMenu}>
          <MenuIcon />
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <AccountCircleIcon />
          <Typography variant="h3" sx={topMenuStyles.nameUser}>
            {user.name}
          </Typography>
          <Button
            id="demo-customized-button"
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={topMenuStyles.buttonMenu}
          />
        </Grid>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchor}
          open={anchor}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <button
              type="button"
              style={{
                ...topMenuStyles.buttonMenu,
                color: '#2c2c2c',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              onClick={signOut}
            >
              Sign out
            </button>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}
