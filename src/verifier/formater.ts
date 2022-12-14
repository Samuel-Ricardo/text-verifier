import { IAllowLetterProps, IFormater, IFormaterRules } from '@Types';

export function format(content:string, rules:IFormaterRules){
    const pedro = RegExp("").
}

export function getFormater():IFormater {
    return {
        ALLOW_LETTER({letters, allowUppercase}){
            return letters instanceof Array? 

                letters.reduce((previus, current) => previus.trim().concat(current.trim()))

                .concat(allowUppercase? letters.reduce(
                    (previus, current) => previus.trim()
                                                 .toUpperCase()
                                                 .concat(current.trim().toUpperCase())
                    ) : '')
            :
                allowUppercase ? `${letters.init.toLowerCase()}-${letters.end.toLowerCase()}${letters.init.toUpperCase()}-${letters.end.toUpperCase()}` : `${letters.init}-${letters.end}`
            
        },
        ALLOW_NUMBER({numbers}){
            let result = ''
            return typeof numbers === 'number' ?
                `${numbers}`
            :
                result.concat(`${numbers.init}-${numbers.end}`)
        }
    }
}

export const group = (content: string) => `(${content})`
export const atomic = (content: string) => `[${content}]` // rule to be applied to one caracter

export const any = (content:string) => `*`
export const anything = (content:string) => `.*`
export const letters = (props:IAllowLetterProps) => {

}