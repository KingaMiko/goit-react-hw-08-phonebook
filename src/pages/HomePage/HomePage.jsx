import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import PhoneIcon from '@mui/icons-material/Phone';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
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
        <Typography
          variant="subtitle1"
          color="rgba(0,0,0,0.5)"
          textAlign="center"
        >
          Your digital directory for contacts.
        </Typography>
      </Box>
    </>
  );
}
