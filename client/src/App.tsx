import './App.css';
import ResponsiveLineMount from './components/graph/ResponsiveLineMount';
import { useStartTelemetry } from "./features/telemetry/telemetryAPI";

function App() {
  useStartTelemetry();

  return (
    <div className="App">
      <ResponsiveLineMount datumType='height'/>
    </div>
  );
}

export default App;
