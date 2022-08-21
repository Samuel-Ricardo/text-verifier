import { IVerifiable } from './verifieable';
import { IApplicable } from './applicable';
import { IRules } from './rule/rules';
import { ICaracterRules } from './rule/caracter-rules';
import { IFormat } from './rule';
export interface IVerifier<rules = IRules | ICaracterRules | IFormat> extends IVerifiable, IApplicable {
    rule: rules
}