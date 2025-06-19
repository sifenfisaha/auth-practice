import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthToken } from "../utils/auth";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: getAuthToken(),
  loading: false,
  error: null,
};

export const signup = createAsyncThunk<
  void,
  { email: string; password: string },
  { rejectValue: string }
>("auth/signup", async ({ email, password }, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:8080/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const data = await res.json();
      return thunkAPI.rejectWithValue(data.message || "Signup Failed");
    }
  } catch (error) {
    return thunkAPI.rejectWithValue("Signup failed due to network error");
  }
});

export const login = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:8080/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return thunkAPI.rejectWithValue(data.message || "Login failed");
    }

    const token = data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (err) {
    return thunkAPI.rejectWithValue("Login failed due to network error");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload || "Signup error";
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login error";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
