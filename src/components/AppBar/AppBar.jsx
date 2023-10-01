import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import AppBarMUI from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarMUI position="fixed" color="secondary">
      <Container maxWidth="lg" disableGutters style={{ maxWidth: '1000px' }}>
        <Toolbar>
          <Navigation />
          <Box flexGrow={1}></Box>
          <Box display="flex" alignItems="center">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </AppBarMUI>
  );
};
