import { IRange } from "@types/range"

export type IAllowLetterProps = {
    letters: IRange<string> | string[]
    allowUppercase: boolean
}