import { RULE_KEYS } from "@Consts";
import { ICaracterRules, IFormat, IRules } from "@Types";
import { filterSpecialCaractersOfStringOrIgnore, mergeMaps } from "@Utils";

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

    if(caracters) results = mergeMaps(verifyCaractersRules(caracters, content), results)
    if(format) results = mergeMaps(verifyFormatRules(format, content), results)

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

export function verifyFormatRules (format: IFormat, content: string) {
    const results = new Map<string, boolean>();
    if(!format) return results;

    var model = filterSpecialCaractersOfStringOrIgnore(format.model, format.string_to_replace.map(replace => replace.key))
    content.trim();

    format.string_to_replace.forEach(replace => {
        var this_regex = `[`
            replace.value.forEach(rule => this_regex = this_regex.concat(rule.apply()))
        this_regex = this_regex.concat(']')
        model = model.replace(replace.key,this_regex)
    })

    const match = content.match(RegExp(`^${model}$`))

    results.set(RULE_KEYS.format, match ? match.length > 0 : false)
    return results
}