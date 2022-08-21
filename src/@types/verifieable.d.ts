export interface IVerifiable {
    verify: (content:string) => Map<string, boolean>
}