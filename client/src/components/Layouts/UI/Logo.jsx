import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../assets/images/icon_logo.png';

const Logo = () => {
  return (
    <Box>
      <Link to='/'>
        <Box component='img' src={Icon} alt='logo' />
      </Link>
    </Box>
  );
};

export default Logo;
