import { IRange } from './range';
import { apply } from '../verifier/apply';
import {IGroupProps, IAllowLetterProps, IAllowNumberProps, IAllowSpecialCharacterProps} from './index'

export interface IFormaterRules {
    GROUP?: IGroupProps
    ALLOW_LETTER?: IAllowLetterProps
    ALLOW_NUMBER?: IAllowNumberProps
    ALLOW_SPECIAL_CHARACTER?: IAllowSpecialCharacterProps
    format:() => string
}
export interface IFormater {
    GROUP?: (props: IGroupProps) => string
    ALLOW_LETTER?: (props: IAllowLetterProps) => string
    ALLOW_NUMBER?: (props: IAllowNumberProps) => string
    ALLOW_SPECIAL_CHARACTER?: (props: IAllowSpecialCharacterProps) => string
}