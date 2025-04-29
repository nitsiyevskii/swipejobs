import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 