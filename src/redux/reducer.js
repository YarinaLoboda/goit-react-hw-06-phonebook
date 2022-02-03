import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

export const itemReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
