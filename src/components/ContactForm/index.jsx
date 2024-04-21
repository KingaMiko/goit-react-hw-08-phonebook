import { Button, TextField, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useForm } from '../hooks/useForm';

const ContactForm = () => {
  const [values, handleChange, resetForm, validate, errors] = useForm({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      dispatch(addContact({ name: values.name, number: values.number }));
      resetForm();
    }
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
        value={values.name}
        onChange={handleChange}
        type="text"
        name="name"
        label="Name"
        placeholder="Name"
        required
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ marginBottom: '10px' }}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        value={values.number}
        onChange={handleChange}
        type="tel"
        name="number"
        label="Number"
        placeholder="Number"
        fullWidth
        required
        sx={{ marginBottom: '10px' }}
        error={!!errors.number}
        helperText={errors.number}
        InputLabelProps={{ shrink: true }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: '10px', width: '100%' }}
      >
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
