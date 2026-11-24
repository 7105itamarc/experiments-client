import { useEffect, useState } from 'react'
import './App.css'
import type { ExperimentSummary } from './types/experiment'
import ExperimentTable from './components/ExperimentTable'
import { getExperiments } from './services/experimentsApi'


function App() {
  const [experiments, setExperiments] = useState<ExperimentSummary[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExperiments(): Promise<void> {
      try {
        const data: ExperimentSummary[] = await getExperiments()
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
  const isEmpty: boolean = experiments.length === 0

  return (
    <>
      <div>
        <h1> Experiments</h1>
        {isEmpty ? (<p>No experiments found</p>) : (<ExperimentTable experiments={experiments}/>)}
      </div>
    </>
  )
}

export default App
