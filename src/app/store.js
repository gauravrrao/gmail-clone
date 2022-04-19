import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailslice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
