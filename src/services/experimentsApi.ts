import type { ExperimentSummary, ExperimentInput } from "../types/experiment";

const API_URL: string = 'http://localhost:5130/api/experiments'
export async function getExperiments() : Promise<ExperimentSummary[]>{
    const response: Response = await fetch(API_URL)

    if(!response.ok) { 
        throw new Error(`Server returned ${response.status}`)
    }

    const data: ExperimentSummary[] = await response.json()
    return data
}

export async function createExperiment(input: ExperimentInput): Promise<ExperimentSummary> {
    const response: Response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(input),
    })
    if(!response.ok) {
        throw new Error(`Server returned ${response.status}`)
    }
    const created: ExperimentSummary = await response.json()
    return created
}