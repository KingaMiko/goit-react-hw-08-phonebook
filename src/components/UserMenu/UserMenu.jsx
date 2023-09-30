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
      justifyContent="flex-end"
      padding={1}
      bgcolor="secondary.main"
      borderRadius="5px"
    >
      <Box
        sx={{
          flexShrink: 1,
          marginRight: '8px',
        }}
      >
        <Typography variant="caption" color="textSecondary" display="block">
          Welcome,
        </Typography>
        <Typography variant="caption" color="textSecondary" display="block">
          {user.name}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<ExitToAppIcon />}
        onClick={handleLogout}
        sx={{
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
