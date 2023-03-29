import { selectTelemetryData } from "../features/telemetry/telemetrySlice";
import { useAppSelector } from "../app/hooks";

const LastGps = () => {
    const telemetryData = useAppSelector(selectTelemetryData);
    const telemetry = telemetryData[telemetryData.length - 1];
    const lat = telemetryData.length > 0 ? telemetry.gps_latitude : 0;
    const lon = telemetryData.length > 0 ? telemetry.gps_longitude : 0;
    const alt = telemetryData.length > 0 ? telemetry.gps_height : 0;
    
    return (
      <div>
        <h2>Son GPS</h2>
        <p>lat: {lat}</p>
        <p>lon: {lon}</p>
        <p>alt: {alt}</p>
      </div>
    );
};
export default LastGps;
