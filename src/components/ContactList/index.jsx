import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Box, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { theme } from 'components/theme';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box sx={{ width: '300px', mt: 3 }}>
      {filteredContacts.map(({ id, name, number }, index) => (
        <Box
          key={id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 0',
            position: 'relative',
            borderBottom: '1px solid #ddd',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon color="primary" />
            <Typography variant="h6" color="secondary" noWrap>
              {name}
            </Typography>
            <Typography variant="body1" noWrap sx={{ marginLeft: 2 }}>
              {number}
            </Typography>
          </Box>
          <IconButton
            onClick={() => handleDelete(id)}
            size="small"
            sx={{ color: theme.palette.primary.main }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default ContactList;
