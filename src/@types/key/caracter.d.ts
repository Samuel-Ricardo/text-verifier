export interface ICaracterRuleKey {
    must_have?: (caracter:string) => string;
    dont_have?: (caracter:string) => string;
    all_uppercase: string;
    all_lowercase: string;
}