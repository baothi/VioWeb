import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import IReport from '~/type/auth.type';
import authService from './authServices';


interface IUser {
  id: number | null;
  first_name: string | null;
  middle_name: string | null;
  last_name: string | null;
  full_name: string | null;
  avatar: {
      origin: {
          url: string;
          code: number;
          filename: string;
          is_private: boolean;
      };
      thumbnail: {
          url: string;
          code: number;
          filename: string;
          is_private: boolean;
      };
  };
  banner: {};
  parent_id: number | null;
  profile_type: number;
}


interface IAuth {
  // Define user properties here
    id?: number | null;
    user_name?: string | null;
    phone_number?: string | null;
    email?: string | null;
    password: string;
}


interface IAuthResponse {
  user: IUser;
  refresh: string;
  access: string;
  firebase_token: string;
}

interface AuthState {
  users: IAuth[];
  loading: boolean;
  isError: boolean,
  isLoginSuccess: boolean,
  
}

// Initial state with types
const initialState: AuthState = {
  users: [],
  loading: false,
  isError: false,
  isLoginSuccess: false
}


export const report = createAsyncThunk<IReport>(
    'auth/report',
    async (report: IReport, thunkAPI) => {
        try {
            return await authService.handleReportAPI(report);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


// Slice with TypeScript
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(report.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(report.fulfilled, (state, action: PayloadAction<IReport>) => {
      console.log(action.payload);
      state.report = action.payload;
      state.loading = false;
      state.isLoginSuccess = true;
    });
    builder.addCase(report.rejected, (state) => {
        state.isError= false,
        state.loading = false;
    });
  },
});

export const { } = userSlice.actions;

export default userSlice.reducer;