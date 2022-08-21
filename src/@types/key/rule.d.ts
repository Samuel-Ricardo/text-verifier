import { ICaracterRuleKey, IDefaultCaracterRuleKey } from './caracter';

export interface IRuleKey {
    caracters?: ICaracterRuleKey,
    format?: string,
    min_length?:string,
    max_length?:string,
    fixed_length?:string,
}

export interface IDefaultRuleKey extends IRuleKey {
    caracters?: IDefaultCaracterRuleKey,
    format?: `format_matches`,
    min_length?: `min_length`,
    max_length?: `max_length`,
    fixed_length?: `fixed_length`,
}