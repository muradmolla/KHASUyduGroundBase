import { telemetry } from "./telemetry";
import { useAppDispatch } from "../../app/hooks";
import { packetRecieved } from "./telemetrySlice";
import React, { useEffect } from "react";

export function useStartTelemetry() {
  const dispatch = useAppDispatch();
  const fetchTelemetry = React.useCallback((event) => {
    const decoded = JSON.parse(event.data);
      const data: telemetry = {
        packet: decoded.packet,
        status: decoded.status,
        error_code: decoded.error_code,
        time: decoded.time,
        a_pressure: decoded.a_pressure,
        t_pressure: decoded.t_pressure,
        a_height: decoded.a_height,
        t_height: decoded.t_height,
        height_difference: decoded.height_difference,
        descend_speed: decoded.descend_speed,
        temperature: decoded.temperature,
        voltage: decoded.voltage,
        gps_latitude: decoded.gps_latitude,
        gps_longitude: decoded.gps_longitude,
        gps_height: decoded.gps_height,
        pitch: decoded.pitch,
        roll: decoded.roll,
        yaw: decoded.yaw,
      };
      
      dispatch(packetRecieved(data));
    }, [dispatch]);
    
    useEffect(() => {
      const socket = new WebSocket("ws://localhost:8765/");
      socket.onmessage = (event: MessageEvent<any>) => { fetchTelemetry(event) };
      return () => {
        socket.close();
      };
    }, [fetchTelemetry]);
}

