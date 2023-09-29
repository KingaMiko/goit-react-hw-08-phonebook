import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
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
          <PersonAddIcon
            style={{
              fontSize: '20vw',
              opacity: 0.1,
              position: 'absolute',
              top: '20%',
              left: '10%',
              transform: 'rotate(25deg)',
            }}
          />
          <PersonAddIcon
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
          Create a New Account
        </Typography>

        <RegisterForm />
      </Box>
    </>
  );
}
