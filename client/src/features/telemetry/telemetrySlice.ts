import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { telemetry } from "./telemetry";
import { RootState } from "../../app/store";

export interface TelemetryState {
    connected: boolean,
    data: telemetry[],
    last_packet: number
} 

const initialState: TelemetryState = {
    connected: true,
    data: [],
    last_packet: 0
};

export const telemetrySlice = createSlice({
    name: "telemetry",
    initialState,
    reducers: {
        packetRecieved: (state, action: PayloadAction<telemetry>) => {
            if (state.last_packet !== action.payload.packet)
            state.data.push(action.payload);
        }
    }
});

export const selectTelemetryData = (state: RootState) => state.telemetry.data;

export const { packetRecieved } = telemetrySlice.actions;

export default telemetrySlice.reducer;