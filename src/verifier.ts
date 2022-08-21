import { IRules, IVerifier } from '@Types';
export function getVerifier(rules: IRules): IVerifier {
    return {
        rule: rules,
        verify(content) {
            
        },
        apply(content) {

        }
    }
}