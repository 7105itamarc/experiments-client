import type { ExperimentSummary } from '../types/experiment';

type ExperimentRowProps = {
    experiment: ExperimentSummary}

    function ExperimentRow({experiment} : ExperimentRowProps){
        const formattedDate : string = new Date(experiment.date).toLocaleDateString()

        return (
            <tr>
                <td> {experiment.id}</td>
                <td> {experiment.name}</td>
                <td> {experiment.location}</td>
                <td>{experiment.type}</td>
                <td>{formattedDate}</td>
                <td>{experiment.status}</td>
            </tr>
        )
    }

    export default ExperimentRow