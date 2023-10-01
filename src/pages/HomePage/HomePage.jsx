import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from 'hooks/useAuth';

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userName = user ? user.name : null;

  const handleTryItClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        background="linear-gradient(45deg, #f2f2f2 30%, #d9d9d9 90%)"
        overflow="hidden"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex="-1"
          overflow="hidden"
        >
          <PhoneIcon
            style={{
              fontSize: '20vw',
              opacity: 0.1,
              position: 'absolute',
              top: '20%',
              left: '10%',
              transform: 'rotate(25deg)',
            }}
          />
          <PhoneIcon
            style={{
              fontSize: '20vw',
              opacity: 0.1,
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              transform: 'rotate(-25deg)',
            }}
          />
        </Box>

        <Typography
          variant="h2"
          component="h1"
          textAlign="center"
          color="rgba(0,0,0,0.7)"
          fontWeight="bold"
          mb={3}
        >
          Welcome to Phonebook!
        </Typography>
        {userName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h5"
              component="h2"
              mt={2}
              color="#733152"
              textAlign="center"
            >
              {userName}!
            </Typography>
          </motion.div>
        )}
        {userName ? (
          <Typography
            variant="subtitle1"
            color="rgba(0,0,0,0.5)"
            textAlign="center"
          >
            This is your digital directory for contacts.
          </Typography>
        ) : (
          <Typography
            variant="subtitle1"
            color="rgba(0,0,0,0.5)"
            textAlign="center"
          >
            Your digital directory for contacts.
          </Typography>
        )}
        <Button
          variant="outlined"
          style={{
            marginTop: '16px',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '10px 30px',
            borderWidth: '2px',
            borderColor: '#FF69B4',
            color: '#FF69B4',
            background: 'transparent',
            transition: 'boxShadow 0.3s, transform 0.15s',
            borderRadius: '25px',
            boxShadow: 'inset 0 0 0 3px #FF69B4',
          }}
          onMouseOver={e => {
            e.currentTarget.style.boxShadow =
              'inset 0 0 0 4px #FF69B4, 0 2px 3px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.boxShadow = 'inset 0 0 0 2px #FF69B4';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onClick={handleTryItClick}
        >
          Try it!
        </Button>
      </Box>
    </>
  );
}
