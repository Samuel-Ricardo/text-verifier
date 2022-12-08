import {IVerifiable, IApplicable, IReplaceableString} from '../index'

export interface IFormat{
    string_to_replace: IReplaceableString[],
    model: string,
}