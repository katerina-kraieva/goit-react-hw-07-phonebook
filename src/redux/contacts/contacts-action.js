import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('todos/addContactsRequest');
export const addContactsSuccess = createAction('todos/addContactsSuccess');
export const addContactsError = createAction('todos/addContactsError');

export const fetchContactsRequest = createAction('todos/fetchContactsRequest');
export const fetchContactsSuccess = createAction('todos/fetchContactsSuccess');
export const fetchContactsError = createAction('todos/fetchContactsError');

export const deleteContactsRequest = createAction('todos/deleteContactsRequest');
export const deleteContactsSuccess = createAction('todos/deleteContactsSuccess');
export const deleteContactsError = createAction('todos/deleteContactsError');

export const clearError = createAction('todos/clearError');

export const changeFilter = createAction('contacts/filter');