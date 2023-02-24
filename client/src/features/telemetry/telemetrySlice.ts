import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { telemetry } from "./telemetry";
import { RootState } from "../../app/store";

export interface TelemetryState {
    connected: boolean,
    data: telemetry[]
} 

const initialState: TelemetryState = {
    connected: true,
    data: [],
};

export const telemetrySlice = createSlice({
    name: "telemetry",
    initialState,
    reducers: {
        packetRecieved: (state, action: PayloadAction<telemetry>) => {
            state.data.push(action.payload);
        }
    }
});

export const selectTelemetryData = (state: RootState) => state.telemetry.data;

export const { packetRecieved } = telemetrySlice.actions;

export default telemetrySlice.reducer;