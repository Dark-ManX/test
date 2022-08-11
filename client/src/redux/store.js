import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const setHorses = createAction('horses');

const initialValue = [
  { name: 'Princess Diana', distance: 0 },
  { name: 'Cricket', distance: 0 },
  { name: 'Rebel', distance: 0 },
  { name: 'Lucy', distance: 0 },
  { name: 'Lacey', distance: 0 },
  { name: 'Ginger', distance: 0 },
];

const MyReducer = createReducer(initialValue, {
  [setHorses]: (state, { payload }) => {
    return (state = payload);
  },
});

export const store = configureStore({
  reducer: {
    horses: MyReducer,
  },
});
