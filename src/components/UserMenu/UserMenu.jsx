import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      padding={1}
      bgcolor="secondary.main"
      borderRadius="5px"
    >
      <Typography variant="subtitle1" color="textSecondary">
        Welcome, {user.name}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<ExitToAppIcon />}
        onClick={handleLogout}
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
        Logout
      </Button>
    </Box>
  );
};
