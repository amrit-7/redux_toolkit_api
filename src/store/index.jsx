import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AlbumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    [AlbumsApi.reducerPath]: AlbumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(AlbumsApi.middleware)
      .concat(photosApi.middleware);
  },
});
setupListeners(store.dispatch);
export * from "./thunks/fetchUsers";
export * from "./thunks/postUsers";
export * from "./thunks/removeUsers";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";
export {
  useAddPhotosMutation,
  useRemovePhotosMutation,
  useFetchPhotosQuery,
} from "./apis/photosApi";
