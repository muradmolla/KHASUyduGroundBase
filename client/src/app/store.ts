import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import telemetrySlice from '../features/telemetry/telemetrySlice';
export const store = configureStore({
  reducer: {
    telemetry: telemetrySlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
