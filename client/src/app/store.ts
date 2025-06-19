import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState = {};
