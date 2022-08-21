import { IDefaultRuleKey } from "@Types";

export const RULE_KEYS:IDefaultRuleKey = {
    caracters: {
        must_have: (caracter) => `must_have - ${caracter}`,
        dont_have: (caracter) => `dont_have - ${caracter}`,
        all_lowercase: "all_lowercase",
        all_uppercase: "all_uppercase",
    },
    format: "format_matches",
    fixed_length: "fixed_length",
    max_length: "max_length",
    min_length: "min_length",
}