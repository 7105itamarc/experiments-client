import { useState } from 'react'
import './App.css'
import type { ExperimentSummary } from './types/experiment'


function App() {
const [experiments, setExperiments] = useState<ExperimentSummary[]>([
  { id: 1, name: "Night Field Test", location: "Haifa", type: "Navigation", date: "2026-11-15T00:00:00", status: "Planned" },
  { id: 2, name: "Radar Calibration", location: "Negev", type: "Radar", date: "2026-12-01T00:00:00", status: "InProgress" },
])


  return (
    <>
      <div>
        <h1> Experiments</h1>
        <ul>
          {experiments.map((ex) => (
            <li key={ex.id}> {ex.name} </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
