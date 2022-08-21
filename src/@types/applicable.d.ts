export interface IApplicable {
    apply: (content:string) => IApplyResult;
}

export interface IApplyResult {
    result: string,
    matchs: Map<string, boolean>
}