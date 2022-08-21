import { ICaracterRules, IRules, IVerifier } from '@Types';
import { IFormat } from '../@types/rule/format';
export function getVerifier(rules: IRules): IVerifier<IRules> {
    return {
        rule: rules,
        verify(content) {
            getCaracterVerifier(this.rule.caracters!)
        },
        apply(content) {

        }
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