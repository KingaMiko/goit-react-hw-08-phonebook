import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';
import { setFilter } from 'redux/contacts/filterSlice';
import ContactList from 'components/ContactList/index';
import ContactForm from 'components/ContactForm/index';
import Filter from 'components/Filter/index';
import {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import {
  StyledAllContacts,
  StyledTitleContacts,
  Wrapper,
  Header,
} from 'components/StyledApp';

export const App = () => {
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

  const handleFilterChange = useCallback(
    e => {
      dispatch(setFilter(e.target.value));
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    id => {
      dispatch(deleteContact(id));
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <Header>Phonebook</Header>
      <ContactForm onSubmit={handleSubmit} />
      <StyledTitleContacts>Contacts</StyledTitleContacts>
      <StyledAllContacts>All contacts: {contacts.length}</StyledAllContacts>
      <Filter value={filter} onChange={handleFilterChange} />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      {visibleContacts.length > 0 ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleDelete}
        />
      ) : (
        <p>No contacts available.</p>
      )}
    </Wrapper>
  );
};
