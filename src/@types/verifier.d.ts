import { IVerifiable } from './verifieable';
import { IApplicable } from './applicable';
import { IRules } from './rule/rules';
export interface IVerifier extends IVerifiable, IApplicable {
    rule: IRules
}