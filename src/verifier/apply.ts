import { RULE_KEYS } from "@Consts";
import { IApplyResult, IRules } from "@Types";
import { verify } from "./verify";

export function apply(rules: IRules, content:string): IApplyResult {
    const result = verify(content, rules);

    if(!result.get(RULE_KEYS.fixed_length)) content = content.slice(0,rules.fixed_length);
    if(!result.get(RULE_KEYS.max_length)) content = content.slice(0, rules.max_length);
    
    if(!result.get(RULE_KEYS.caracters.all_lowercase)) content = rules.caracters?.all_lowercase? content.toLocaleLowerCase() : content;
    if(!result.get(RULE_KEYS.caracters.all_uppercase)) content = rules.caracters?.all_uppercase? content.toLocaleUpperCase() : content;

    rules.caracters?.dont_have?.forEach(caracter => {if(!result.get(RULE_KEYS.caracters.dont_have(caracter))) content = content.replace(caracter, "")})
    rules.caracters?.must_have?.forEach(caracter => {if(!result.get(RULE_KEYS.caracters.must_have(caracter))) content = content.concat(caracter)})

    return {result: content, matchs: result}
}