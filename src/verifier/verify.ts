import { RULE_KEYS } from "@Consts";
import { IRules } from "@Types";

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