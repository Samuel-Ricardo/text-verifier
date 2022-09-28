import { IRange } from './range';
import { apply } from '../verifier/apply';
import { IAllowLetterProps, IAllowNumberProps, IAllowSpecialCharacterProps, IGroupProps } from './props';

export interface IFormaterRules {
    GROUP?: IGroupProps
    ALLOW_LETTER?: IAllowLetterProps
    ALLOW_NUMBER?: IAllowNumberProps
    ALLOW_SPECIAL_CHARACTER?: IAllowSpecialCharacterProps
    apply:() => string
}
export interface IFormater {
    GROUP?: (props: IGroupProps) => string
    ALLOW_LETTER?: (props: IAllowLetterProps) => string
    ALLOW_NUMBER?: (props: IAllowNumberProps) => string
    ALLOW_SPECIAL_CHARACTER?: (props: IAllowSpecialCharacterProps) => string
}