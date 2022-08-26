import { IRange } from './range';
import { apply } from '../verifier/apply';
import {IGroupProps, IAllowLetterProps, IAllowNumberProps, IAllowSpecialCharacterProps} from './index'

export interface IFormaterRules {
    GROUP?: IGroupProps
    ALLOW_LETTER?: IAllowLetterProps
    ALLOW_NUMBER?: IAllowNumberProps
    ALLOW_SPECIAL_CHARACTER?: IAllowSpecialCharacterProps
}
export interface IFormater {
    GROUP?: (content: string, groupes_range: IRange<number>[]) => string
    ALLOW_LETTER?: (letters: IRange<string> | string, allowUppercase: boolean) => string
    ALLOW_NUMBER?: (numbers: IRange<number> | number) => string
    ALLOW_SPECIAL_CHARACTER?: (caracters: string[]) => string
}