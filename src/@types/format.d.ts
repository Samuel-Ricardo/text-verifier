import { IApplicable } from "./applicable";
import { IVerifiable } from "./verifieable";

export interface IFormat extends IVerifiable, IApplicable{
    string_to_replace: IReplacebleString[],
    model: string,
}