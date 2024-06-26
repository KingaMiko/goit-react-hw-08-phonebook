import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleTestLogin = () => {
    const testCredentials = {
      email: 'tescik@t.pl',
      password: 'Tescik1.',
    };
    dispatch(logIn(testCredentials));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      width="300px"
      bgcolor="rgba(255, 255, 255, 0.8)"
      padding="20px"
      borderRadius="3px"
      boxShadow="0 9px 50px hsla(20, 67%, 75%, 0.31)"
    >
      <TextField
        autoComplete="on"
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your e-mail"
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: '10px' }}
      />

      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: '10px' }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: '10px', width: '100%' }}
      >
        Log In
      </Button>
      <Typography
        variant="body2"
        style={{
          marginTop: '10px',
          marginBottom: '-10px',
          color: '#616161',
          fontSize: '12px',
        }}
      >
        Don't have an account? <Link to="/register">Register here</Link>
      </Typography>
      <Button
        onClick={handleTestLogin}
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          width: '100%',
        }}
      >
        Log in with test account
      </Button>
    </Box>
  );
};
