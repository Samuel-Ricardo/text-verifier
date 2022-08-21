import { IRules } from "@Types";
import { verify } from "./verify";

export function apply(rules: IRules, content:string): Map<string,boolean> {
    const result = verify(content, rules);

    
}