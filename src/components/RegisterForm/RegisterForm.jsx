import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.password.value !== form.elements.confirmPassword.value) {
      alert('Passwords do not match!');
      return;
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
        type="text"
        name="name"
        label="Username"
        placeholder="Username"
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: '10px' }}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="example@example.com"
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
      <TextField
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Re-enter your password"
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
        Register
      </Button>
    </Box>
  );
};
