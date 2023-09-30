import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import ContactList from 'components/ContactList/index';
import ContactForm from 'components/ContactForm/index';
import Filter from 'components/Filter/index';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async values => {
      try {
        await dispatch(addContact(values));
      } catch (error) {
        alert(error.message);
      }
    },
    [dispatch]
  );

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        background="linear-gradient(45deg, #f2f2f2 30%, #d9d9d9 90%)"
        overflow="hidden"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex="-1"
          overflow="hidden"
        >
          <ContactsIcon
            style={{
              fontSize: '20vw',
              opacity: 0.1,
              position: 'absolute',
              top: '20%',
              left: '10%',
              transform: 'rotate(25deg)',
            }}
          />
          <ContactsIcon
            style={{
              fontSize: '20vw',
              opacity: 0.1,
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              transform: 'rotate(-25deg)',
            }}
          />
        </Box>

        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          color="rgba(0,0,0,0.7)"
          fontWeight="bold"
          mb={3}
        >
          Your Contacts
        </Typography>
        <ContactForm onSubmit={handleSubmit} />
        <Typography variant="h6" component="p" mt={2}>
          All contacts: {contacts.length}
        </Typography>
        <Filter />
        {isLoading && <CircularProgress />}
        {error && <Alert severity="error">{error.message}</Alert>}
        {visibleContacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={id => dispatch(deleteContact(id))}
          />
        ) : (
          <Typography variant="body1" mt={2}>
            No contacts available.
          </Typography>
        )}
      </Box>
    </>
  );
}