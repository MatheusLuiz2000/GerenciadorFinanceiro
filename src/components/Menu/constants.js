import React from 'react';
import BalanceIcon from '@mui/icons-material/Balance';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const MenuItems = [
  {
    icon: <BalanceIcon />,
    text: 'Balance',
    link: '/home',
  },
  {
    icon: <ArrowUpwardIcon />,
    text: 'Incomes',
    link: '/checks',
  },
  {
    icon: <ArrowDownwardIcon />,
    text: 'Expenses',
    link: '/expenses',
  },
  {
    icon: <FactCheckIcon />,
    text: 'Checks',
    link: '/checks',
  },
  {
    icon: <NotificationsIcon />,
    text: 'Notifications',
    link: '/home',
  },
  {
    icon: <PersonIcon />,
    text: 'Profile',
    link: '/home',
  },
  {
    icon: <SettingsIcon />,
    text: 'Settings',
    link: '/home',
  },
  {
    icon: <HelpIcon />,
    text: 'Help',
    link: '/home',
  },
];
