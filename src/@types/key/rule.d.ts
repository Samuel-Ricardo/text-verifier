import { ICaracterRuleKey } from "./caracter";

export interface IRuleKey {
    caracters?: ICaracterRuleKey,
    format?: string,
    min_length?:string,
    max_length?:string,
    fixed_length?:string,
}