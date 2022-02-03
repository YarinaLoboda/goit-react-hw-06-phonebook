import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('items/addContact');
export const deleteContact = createAction('items/deleteContact');
export const changeFilter = createAction('filter/changeFilter');
