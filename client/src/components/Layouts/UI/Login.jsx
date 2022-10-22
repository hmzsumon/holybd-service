import styled from '@emotion/styled';
import { Box, Container, Divider, Link, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from './Layout';

import LoginForm from './LoginForm';
import SocialAuth from './SocialAuth';

//////////////////////////////////
const RootStyle = styled('div')({
  background: 'rgb(249, 250, 251)',
  height: '90vh',
  display: 'grid',
  placeItems: 'center',
  margin: '1rem 0',
  padding: '1rem',
});

const HeadingStyle = styled(Box)({
  textAlign: 'center',
});

const ContentStyle = styled('div')({
  maxWidth: 480,
  padding: 25,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#fff',
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth }) => {
  return (
    <Layout>
      <RootStyle>
        <Container
          maxWidth='sm'
          sx={{ border: '1px solid gray', borderRadius: '5px' }}
        >
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                Login to your account
              </Typography>
            </HeadingStyle>

            <Box component={motion.div} {...fadeInUp}>
              <SocialAuth />
            </Box>

            <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <LoginForm setAuth={setAuth} />

            <Typography
              component={motion.p}
              {...fadeInUp}
              variant='body2'
              align='center'
              sx={{ mt: 3 }}
            >
              Don’t have an account?{' '}
              <Link variant='subtitle2' component={RouterLink} to='/signup'>
                Sign up
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Layout>
  );
};

export default Login;
