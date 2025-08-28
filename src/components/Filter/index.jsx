import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box my={2}>
      <TextField
        variant="outlined"
        maxWidth="200px"
        marginBottom="0px"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        label="Search for contact"
        placeholder="Enter contact name"
        InputLabelProps={{
          shrink: true,
          sx: {
            color: 'grey.700',
          },
        }}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '3px',
          '& fieldset': {
            borderColor: 'rgba(0,0,0,0.23)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0,0,0,0.6)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
        }}
      />
    </Box>
  );
};

export default Filter;
