import { IRange } from './range';
import { apply } from '../verifier/apply';
export interface IFormaterRules {
    GROUP?: IGroupProps
    ALLOW_LETTER?: {letters: IRange<string> | string, allowUppercase: boolean}
    ALLOW_NUMBER?: {numbers: IRange<number> | number}
    ALLOW_SPECIAL_CHARACTER?: {caracters: string[]}
}
export interface IFormater {
    GROUP?: (content: string, range: IRange<number>) => string
    ALLOW_LETTER?: (letters: IRange<string> | string, allowUppercase: boolean) => string
    ALLOW_NUMBER?: (numbers: IRange<number> | number) => string
    ALLOW_SPECIAL_CHARACTER?: (caracters: string[]) => string
}

