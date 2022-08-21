import { ICaracterRules, IRules, IVerifier } from '@Types';
import { IFormat } from '../@types/rule/format';
import { apply } from './apply';
import { verify } from './verify';
export function getVerifier(rules: IRules): IVerifier<IRules> {
    return {
        rule: rules,
        verify(content) { return verify(content, rules) },
        apply(content) { return apply(rules, content) }
    }
}

export function getCaracterVerifier(rules: ICaracterRules): IVerifier<ICaracterRules> {
    return {
        rule: rules,
        verify(content) {
            
            
        },
        apply(content) {

        }
    }
}

export function getFormatVerifier(rules: IFormat): IVerifier<IFormat> {
    return {
        rule: rules,
        verify(content) {
            
            
        },
        apply(content) {

        }
    }
}