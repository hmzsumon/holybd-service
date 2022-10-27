import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLoginMutation } from '../../../features/auth/authApi';

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [login, { isError, isLoading, isSuccess, error }] = useLoginMutation();

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData(e.target);
    myForm.set('username', username);
    myForm.set('password', password);
    // for (let pair of myForm.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    login({ username, password });
  };

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Login successful', {
        variant: 'success',
      });
      navigate('/admin/dashboard', { replace: true });
    }
    if (isError) {
      enqueueSnackbar(error.data.message, {
        variant: 'error',
      });
    }
  }, [isSuccess, isError, error, enqueueSnackbar, navigate]);

  return (
    <form autoComplete='off' noValidate onSubmit={handleSubmit}>
      <Box
        component={motion.div}
        animate={{
          transition: {
            staggerChildren: 0.55,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={animate}
        >
          <TextField
            fullWidth
            autoComplete='username'
            type='text'
            label='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            autoComplete='current-password'
            type={showPassword ? 'text' : 'password'}
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                      <Icon icon='eva:eye-fill' />
                    ) : (
                      <Icon icon='eva:eye-off-fill' />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={animate}
        >
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ my: 2 }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked value='remember' />}
              label='Remember me'
            />

            <Link
              component={RouterLink}
              variant='subtitle2'
              to='#'
              underline='hover'
            >
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isLoading}
          >
            {isLoading ? 'loading...' : 'Login'}
          </LoadingButton>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
