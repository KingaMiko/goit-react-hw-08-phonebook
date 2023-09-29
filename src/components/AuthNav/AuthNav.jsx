import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AuthNav = () => {
  return (
    <Box display="flex" gap={2}>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<ExitToAppIcon />}
        component={NavLink}
        to="/register"
        sx={{
          marginLeft: 1,
          borderColor: '#FF69B4',
          color: '#FF69B4',
          borderRadius: 3,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'rgba(255,105,180, 0.1)',
            boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
          },
        }}
      >
        Register
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={NavLink}
        to="/login"
        sx={{
          marginLeft: 1,
          borderColor: '#FF69B4',
          color: '#FF69B4',
          borderRadius: 3,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'rgba(255,105,180, 0.1)',
            boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
