import { IApplicable } from "./applicable";
import { IVerifiable } from "./verifieable";

export interface IRules extends IVerifiable, IApplicable {
    caracters?: IcaractersRules,
    min_length?: number,
    fixed_length?: number,
    max_length?: number,
    format?: IFormat
}