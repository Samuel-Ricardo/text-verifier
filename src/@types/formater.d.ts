export interface IFormater {
    GROUP?: (constent: string) => string
    ALLOW_LETTER?: (letters: range | string, allowUppercase: boolean) => string
    ALLOW_NUMBER?: (numbers: range | number) => string
    ALLOW_SPECIAL_CHARACTER?: (caracters: string[]) => string
}