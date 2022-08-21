export interface ICaracterRuleKey {
    must_have?: (caracter:string) => string;
    dont_have?: (caracter:string) => string;
    all_uppercase: string;
    all_lowercase: string;
}

export interface IDefaultCaracterRuleKey extends ICaracterRuleKey {
    must_have: (caracter:string) => `must_have - ${caracter}`;
    dont_have: (caracter:string) => `dont_have - ${caracter}`;
    all_uppercase: `all_uppercase`;
    all_lowercase: `all_lowercase`
}