import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import IReport from '~/type/auth.type';
import authService from './authServices';

// Define the type for the initial state
interface UserState {
  loading: boolean;
  report?: IReport;
  isError: boolean;
  isSuccess: boolean;
}

// Define the initial state with a type
const initialState: UserState = {
  loading: false,
  isError: false,
  isSuccess: false,
};

export const report = createAsyncThunk<IReport, IReport, { rejectValue: string }>(
  'auth/report',
  async (reportData: IReport, thunkAPI:any) => {
    try {
      const response = await authService.handleReportAPI(reportData);
      // Ensure response is of type IReport
      return response;
    } catch (error: any) {
      // Extract error message from error object
      const errorMessage = error.response?.data?.message || 'An error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// Slice with TypeScript
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder:any) => {
    builder.addCase(report.pending, (state:any) => {
      state.loading = true;
    });
    builder.addCase(report.fulfilled, (state:any, action: PayloadAction<IReport>) => {
      console.log(action.payload);
      state.report = action.payload;
      state.loading = false;
      state.isSuccess = true;
    });
    builder.addCase(report.rejected, (state:any) => {
      state.isError = true;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
