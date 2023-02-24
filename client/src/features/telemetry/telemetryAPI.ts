import { telemetry } from "./telemetry";
import { useAppDispatch } from "../../app/hooks";
import { packetRecieved } from "./telemetrySlice";
import React, { useEffect } from "react";
let paket = 0;

export function useStartTelemetry() {
  const dispatch = useAppDispatch();
    const fetchTelemetry = React.useCallback(() => {
      const randData = randomData();
      const data: telemetry = {
        packet: paket,
        t_height: randData.t_height,
        a_height: randData.a_height,
      };
      paket++;
      dispatch(packetRecieved(data));
    }, [dispatch]);
    useEffect(() => {
      const interval = setInterval(fetchTelemetry, 30);
      return () => {
        clearInterval(interval);
      };
    }, [fetchTelemetry]);
}

const randomData = () => {
    return {
      t_height: Math.floor(Math.random() * 30 + 50),
      a_height: Math.floor(Math.random() * 30 + 50),
    };
}
