import {IVerifiable, IApplicable, IReplaceableString} from '../index'

export interface IFormat extends IVerifiable, IApplicable{
    string_to_replace: IReplaceableString[],
    model: string,
}