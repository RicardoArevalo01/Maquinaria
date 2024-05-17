import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth';
import {connectionSlice} from './connection';
import {permissionSlice} from './permissions';
import {themeSlice} from './theme';
import {api} from '../services';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    connection: connectionSlice.reducer,
    permission: permissionSlice.reducer,
    theme: themeSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
