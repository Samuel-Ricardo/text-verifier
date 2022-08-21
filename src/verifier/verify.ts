import { RULE_KEYS } from "@Consts";
import { ICaracterRules, IRules } from "@Types";

export function verify(content:string, rules:IRules):Map<string, boolean> {
    var results = new Map<string, boolean>();

    const {
        caracters,
        fixed_length,
        format,
        max_length,
        min_length,
    } = rules;

    if(fixed_length) results.set(RULE_KEYS.fixed_length, content.length === fixed_length)
    if(max_length) results.set(RULE_KEYS.max_length, content.length <= max_length)
    if(min_length) results.set(RULE_KEYS.min_length, content.length >= min_length)

    return results;
}

export function verifyCaractersRules (rules: ICaracterRules, content: string){
    const result = new Map<string,boolean>();
    const { caracters } = RULE_KEYS;

    if(rules) {
        if(rules.all_lowercase) result.set(caracters.all_lowercase, content.toLowerCase() === content)
        if(rules.all_uppercase) result.set(caracters.all_uppercase, content.toUpperCase() === content)

        if(rules.dont_have) rules.dont_have.forEach(caracter => result.set(caracters.dont_have(caracter), !content.includes(caracter)))
        if(rules.must_have) rules.must_have.forEach(caracter => result.set(caracters.must_have(caracter), content.includes(caracter)))
    }

    return result;
}