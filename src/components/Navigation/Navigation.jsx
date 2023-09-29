import { useAuth } from 'hooks/useAuth';
import { NavLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const isActive = path => location.pathname === path;

  return (
    <Box display="flex" gap={2}>
      <Link
        component={NavLink}
        to="/"
        color="inherit"
        underline="none"
        sx={{
          fontWeight: 'bold',
          color: isActive('/') && '#e298bf',
          textDecoration: isActive('/') ? 'underline' : 'none',
          textDecorationThickness: '2px',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          component={NavLink}
          to="/contacts"
          color="inherit"
          underline="none"
          sx={{
            fontWeight: 'bold',
            color: isActive('/contacts') && '#e298bf',
            textDecoration: isActive('/contacts') ? 'underline' : 'none',
            textDecorationThickness: '2px',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
