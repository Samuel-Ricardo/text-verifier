import { IApplicable } from "./applicable";
import { ICaracterRules } from "./caracter-rules";
import { IVerifiable } from "./verifieable";

export interface IRules extends IVerifiable, IApplicable {
    caracters?: ICaracterRules,
    min_length?: number,
    fixed_length?: number,
    max_length?: number,
    format?: IFormat
}