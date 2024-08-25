import {configureStore} from '@reduxjs/toolkit';
import workoutReducer from './workout/workout.store';

export const store = configureStore({
  reducer: workoutReducer,
});
