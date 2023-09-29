import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
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
          <LockIcon
            style={{
              fontSize: '20vw',
              opacity: 0.1,
              position: 'absolute',
              top: '20%',
              left: '10%',
              transform: 'rotate(25deg)',
            }}
          />
          <LockIcon
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
          Login to Your Account
        </Typography>

        <LoginForm />
      </Box>
    </>
  );
}
