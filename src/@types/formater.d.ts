import { IRange } from './range';
export interface IFormater {
    GROUP?: (constent: string) => string
    ALLOW_LETTER?: (letters: IRange<string> | string, allowUppercase: boolean) => string
    ALLOW_NUMBER?: (numbers: IRange<number> | number) => string
    ALLOW_SPECIAL_CHARACTER?: (caracters: string[]) => string
}