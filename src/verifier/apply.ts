import { RULE_KEYS } from "@Consts";
import { IApplyResult, ICaracterRules, IRules } from "@Types";
import { verify, verifyCaractersRules } from './verify';

export function apply(rules: IRules, content:string): IApplyResult {
    const result = verify(content, rules);
    try {
        if(!result.get(RULE_KEYS.fixed_length)) content = content.slice(0,rules.fixed_length);
        if(!result.get(RULE_KEYS.max_length)) content = content.slice(0, rules.max_length);
        
        
        return {result: content, matchs: result}
    } catch (error) {
        return {matchs: new Map<string, boolean>().set("ERROR",true), result: content}
    }
}

export function applyCaracterRules(rules: ICaracterRules, content: string, result?:Map<string, boolean>): IApplyResult{
    const results = result? result : verifyCaractersRules(rules, content)

    if(!results.get(RULE_KEYS.caracters.all_lowercase)) content = rules.all_lowercase? content.toLocaleLowerCase() : content;
    if(!results.get(RULE_KEYS.caracters.all_uppercase)) content = rules.all_uppercase? content.toLocaleUpperCase() : content;

    rules.dont_have?.forEach(caracter => {if(!results.get(RULE_KEYS.caracters.dont_have(caracter))) content = content.replace(caracter, "")})
    //rules.must_have?.forEach(caracter => {if(!results.get(RULE_KEYS.caracters.must_have(caracter))) content = content.concat(caracter)})
    
    return {result: content, matchs: results};
}