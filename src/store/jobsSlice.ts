import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Job } from '../types/job';

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get<Job[]>(
    `https://test.swipejobs.com/api/worker/${workerId}/matches`
  );
  return response.data;
});

export const acceptJob = createAsyncThunk(
  'jobs/acceptJob',
  async ({ workerId, jobId }: { workerId: string; jobId: string }) => {
    console.log("acceptJob", workerId, jobId);
    const response = await axios.get(
      `https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`
    );
    return response.data;
  }
);

export const rejectJob = createAsyncThunk(
  'jobs/rejectJob',
  async ({ workerId, jobId }: { workerId: string; jobId: string }) => {
    const response = await axios.get(
      `https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`
    );
    return response.data;
  }
);

interface JobsState {
  jobs: Job[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  status: "idle",
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default jobsSlice.reducer;
