import { useEffect, useState } from 'react'
import './App.css'
import type { ExperimentSummary } from './types/experiment'


function App() {
const [experiments, setExperiments] = useState<ExperimentSummary[]>([])

useEffect(() => {
  async function loadExperiments(): Promise<void> {
    const response: Response = await fetch("http://localhost:5130/api/experiments")
    const data: ExperimentSummary[] = await response.json()
    setExperiments(data)
  }

  loadExperiments()}
,[])

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
