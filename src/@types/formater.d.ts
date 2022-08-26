import { IRange } from './range';
import { apply } from '../verifier/apply';
export interface IFormaterRules {
    GROUP?: IGroupProps
    ALLOW_LETTER?: IAllowLetterProps
    ALLOW_NUMBER?: AllowNumberProps
    ALLOW_SPECIAL_CHARACTER?: {caracters: string[]}
}
export interface IFormater {
    GROUP?: (content: string, range: IRange<number>) => string
    ALLOW_LETTER?: (letters: IRange<string> | string, allowUppercase: boolean) => string
    ALLOW_NUMBER?: (numbers: IRange<number> | number) => string
    ALLOW_SPECIAL_CHARACTER?: (caracters: string[]) => string
}

export type IGroupProps = {
    content: string,
    range: IRange<number>
}

export type IAllowLetterProps = {
    letters: IRange<string> | string
    allowUppercase: boolean
}

export type AllowNumberProps = {
    numbers: IRange<number> | number
}