import {IApplicable,IVerifiable} from "../index";
import { ICaracterRules } from "./caracter-rules";

export interface IRules extends IVerifiable, IApplicable {
    caracters?: ICaracterRules,
    min_length?: number,
    fixed_length?: number,
    max_length?: number,
    format?: IFormat
}