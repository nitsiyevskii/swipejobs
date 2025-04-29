import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const response = await axios.get(
      `https://test.swipejobs.com/api/worker/${workerId}/profile`
    );
    return response.data;
  }
);

interface ProfileState {
  profile: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  profile: null,
  status: "idle",
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default profileSlice.reducer;
