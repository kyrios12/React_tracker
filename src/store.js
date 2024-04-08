import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Load state from localStorage if it exists
const preloadedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {};

  // Configuring Store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState,
});

// Subscribe to store changes to persist state in localStorage
store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
});

export default store;
