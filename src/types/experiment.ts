export type ExperimentSummary = {
    id : number;
    name : string;
    location : string;
    type : string;
    date : string;
    status: "Planned" | "InProgress" | "Completed";

}