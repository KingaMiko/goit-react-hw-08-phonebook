import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container, CircularProgress } from '@mui/material';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage.jsx'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Container>
  ) : (
    <Container maxWidth="md" style={{ marginBottom: '20px' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
