import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.loading;
const getError = state => state.error;

const getContacts = state => state.contacts;

const getFilter = state => state.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
});

const contactsSelector = {
  getLoading,
  getError,
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelector;