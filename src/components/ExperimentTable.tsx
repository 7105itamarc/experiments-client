import ExperimentRow from "./ExperimentRow";
import type { ExperimentSummary } from '../types/experiment';

type ExperimentTableProps = {
    experiments: ExperimentSummary[]
}

function ExperimentTable({experiments} : ExperimentTableProps){
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                    {experiments.map((ex)=>(
                        <ExperimentRow key={ex.id} experiment={ex}></ExperimentRow>
                    ))}
            </tbody>
        </table>
    )
}

export default ExperimentTable 