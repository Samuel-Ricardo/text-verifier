import {IApplicable,IVerifiable, ICaracterRules} from "../index";

export interface IRules{
    caracters?: ICaracterRules,
    min_length?: number,
    fixed_length?: number,
    max_length?: number,
    format?: IFormat
}