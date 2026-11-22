import { useEffect, useState } from 'react'
import './App.css'
import type { ExperimentSummary } from './types/experiment'


function App() {
  const [experiments, setExperiments] = useState<ExperimentSummary[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExperiments(): Promise<void> {
      try {
        const response: Response = await fetch("http://localhost:5130/api/experiments")
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`)
        }

        const data: ExperimentSummary[] = await response.json()
        setExperiments(data)
      }
      catch (err) {
        console.error(err)
        setError("Failed to load experiments")
      }
      finally {
        setLoading(false)
      }
    }

    loadExperiments()
  }, [])

  if (loading) {
    return <p>Loading experiments...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

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
