import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, TextField, Button, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.password.value !== form.elements.confirmPassword.value) {
      toast.error(
        "Oops! The passwords you entered don't match. Please try again."
      );
      return;
    }

    const password = form.elements.password.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()+=._-]/.test(password);

    if (password.length < 8 || !hasUpperCase || !hasDigit || !hasSpecialChar) {
      toast.error(
        'Oops! Your password must meet certain requirements. Check the list and try again.'
      );
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
        autoComplete="on"
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
        placeholder="Enter your password*"
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
        placeholder="Confirm password"
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: '10px' }}
      />
      <Typography
        variant="body2"
        style={{
          marginTop: 5,
          marginBottom: 5,
          color: '#616161',
          fontSize: '12px',
        }}
      >
        * Password requirements:
        <ul style={{ margin: 5, paddingLeft: 16 }}>
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one digit</li>
          <li>At least one special character (e.g. !, @, #)</li>
        </ul>
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: '10px', width: '100%' }}
      >
        Register
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
        Already have an account? <Link to="/login">Log in here</Link>
      </Typography>
    </Box>
  );
};
