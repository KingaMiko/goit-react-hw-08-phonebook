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

  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box
      sx={{
        maxWidth: '400px',
        width: '100%',
        mt: 3,
        mx: 'auto',
      }}
    >
      {filteredContacts.map(({ id, name, number }, index) => (
        <Box
          key={id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 10px',
            borderBottom: '1px solid #ddd',
          }}
        >
          <PhoneIcon color="primary" sx={{ marginRight: 3 }} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h6" color="secondary" noWrap>
              {name}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0, marginLeft: 1 }}>
            <Typography variant="body1" noWrap>
              <a
                href={`tel:${number}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {number}
              </a>
            </Typography>
          </Box>
          <IconButton
            onClick={() => handleDelete(id)}
            size="small"
            sx={{ color: theme.palette.primary.main, marginLeft: 1 }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default ContactList;
