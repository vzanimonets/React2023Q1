import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form-slice';
import searchReducer from './search-slice';
import { apiSlice } from './api-slice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
