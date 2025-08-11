import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import savetolocalstorage, {
  getFromLocalStorage,
} from "../../utils/LocalStorageCURD";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: true,
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ Username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: Username, password }),
        }
      );
      if (!response.ok) {
        const error = await response.json();
        console.log("error :>> ", error);
        return rejectWithValue(error.message);
      }

      const user = await response.json();
      if (user?.data?.token && user?.success) {
        savetolocalstorage("jwtToken", user?.data?.token);
      }
      return user;
    } catch (err) {
      console.log("err :>> ", err);
      return rejectWithValue(err.message);
    }
  }
);
export const VerifyTokenThunk = createAsyncThunk(
  "auth/verifyToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = getFromLocalStorage("jwtToken");
      if (!token) {
        return rejectWithValue("No token found");
      }
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/auth/verifyToken`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }
      const user = await response.json();
      return user;
    } catch (err) {
      console.log("err :>> ", err);
      return rejectWithValue(err.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(VerifyTokenThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(VerifyTokenThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(VerifyTokenThunk.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
