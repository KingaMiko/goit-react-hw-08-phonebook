import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';

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
        justifyContent="flex-start"
        borderRadius="5px"
        maxWidth="500px"
        width="auto"
        minHeight="500px"
        margin="50px auto"
        bgcolor="rgba(232, 160, 191, 0.7)"
        boxShadow="0 9px 50px hsla(20, 67%, 75%, 0.31)"
        sx={{
          '@media screen and (max-width: 767px)': {
            width: '100%',
            height: '100vh',
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          margin="30px"
        >
          Welcome to Phonebook!
        </Typography>
      </Box>
    </>
  );
}
