import './App.css';

import ResponsiveLineMount from './components/graph/ResponsiveLineMount';
import HeaderSection from './components/sections/HeaderSection';
import { useStartTelemetry } from "./features/telemetry/telemetryAPI";

function App() {
  useStartTelemetry();

  return (
    <div className="App">
      <HeaderSection />
      <ResponsiveLineMount datumType="height" />
      <ResponsiveLineMount datumType="velocity" />
    </div>
  );
}

export default App;
