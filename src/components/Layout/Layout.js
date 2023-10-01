import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer/Footer';

export const Layout = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar />
      <Box mt={8}>
        {' '}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Box>
      <Footer />
    </Box>
  );
};
