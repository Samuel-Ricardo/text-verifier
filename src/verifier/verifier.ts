import { ICaracterRules, IRules, IVerifier } from '@Types';
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