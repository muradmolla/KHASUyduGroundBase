import { Serie } from "@nivo/line";
import { selectTelemetryData } from "../../features/telemetry/telemetrySlice";
import { useAppSelector } from "../../app/hooks";

export const useGraphData = (datumType: datumTypes): Serie[] => {
  const telemetry = useAppSelector(selectTelemetryData);
  const slicedData = telemetry.slice(-30);
  let newData = [];
  switch (datumType) {
    case "height":
      const t_height = slicedData.map((data) => {
        return { x: data.packet, y: data.t_height };
      });
      const a_height = slicedData.map((data) => {
        return { x: data.packet, y: data.a_height };
      });
      newData = [
        {
          id: "Taşıyıcı",
          data: t_height,
        },
        {
          id: "Görev Yükü",
          data: a_height,
        },
      ];
      break;
    case "velocity":
      const descend_speed = slicedData.map((data) => {
        return { x: data.packet, y: data.descend_speed };
      });
      newData = [
        {
          id: "Görev Yükü",
          data: descend_speed,
        },
      ];
      break;
    case "pressure":
      const a_pressure = slicedData.map((data) => {
        return { x: data.packet, y: data.a_pressure };
      });
      const t_pressure = slicedData.map((data) => {
        return { x: data.packet, y: data.t_pressure };
      });
      newData = [
        {
          id: "Taşıyıcı",
          data: t_pressure,
        },
        {
          id: "Görev Yükü",
          data: a_pressure,
        },
      ];
      break;
    case "heightDiff":
      const height_difference = slicedData.map((data) => {
        return { x: data.packet, y: data.height_difference };
      });
      newData = [
        {
          id: "Görev Yükü",
          data: height_difference,
        },
      ];
      break;
    case "voltage":
      const voltage = slicedData.map((data) => {
        return { x: data.packet, y: data.voltage };
      });
      newData = [
        {
          id: "Görev Yükü",
          data: voltage,
        },
      ];
      break;
    case "temperature":
      const temperature = slicedData.map((data) => {
        return { x: data.packet, y: data.temperature };
      });
      newData = [
        {
          id: "Görev Yükü",
          data: temperature,
        },
      ];
      break;
    default:
      newData = [];
  }

    return newData;
}



export type datumTypes =
  | "height"
  | "velocity"
  | "pressure"
  | "heightDiff"
  | "voltage"
  | "temperature";