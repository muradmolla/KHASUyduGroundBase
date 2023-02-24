import { Serie } from "@nivo/line";
import { selectTelemetryData } from "../../features/telemetry/telemetrySlice";
import { useAppSelector } from "../../app/hooks";

export const useGraphData = (datumType: datumTypes): Serie[] => {
    const telemetry = useAppSelector(selectTelemetryData);
    const t_height = telemetry.slice(-30).map((data) => {
        return { x: data.packet, y: data.t_height };
    })
    const a_height = telemetry.slice(-30).map((data) => {
      return { x: data.packet, y: data.a_height };
    });
        const newData = [
          {
            id: "taşıyıcı",
            data: t_height,
          },
          {
            id: "aktif",
            data: a_height,
          },
    ];
    return newData;
}



export type datumTypes =
  | "height"
  | "velocity"
  | "pressure"
  | "heightDiff"
  | "voltage"
  | "temperature";