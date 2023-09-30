import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fdf4f5',
        padding: '5px 0',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="subtitle1"
        fontSize={12}
        color="rgba(0,0,0,0.5)"
        textAlign="center"
      >
        Copyright ©{' '}
        <Link
          href="https://github.com/KingaMiko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinga Mikołajczyk
        </Link>{' '}
        2023.
      </Typography>
    </Box>
  );
};

export default Footer;
