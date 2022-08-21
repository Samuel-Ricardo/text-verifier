import { IVerifiable, IApplicable, IRules, ICaracterRules, ICaracterRules, IFormat } from './index';
export interface IVerifier<rules = IRules | ICaracterRules | IFormat> extends IVerifiable, IApplicable {
    rule: rules
}