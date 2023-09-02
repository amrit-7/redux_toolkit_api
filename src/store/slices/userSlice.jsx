import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { postUsers } from "../thunks/postUsers";
import { removeUsers } from "../thunks/removeUsers";

const UserSlice = createSlice({
  name: "Users",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(postUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(postUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(removeUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUsers.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const UsersReducer = UserSlice.reducer;
