import { supportedLang } from "../constants"

export const isValidLang = (lang: string): boolean => {
    if (supportedLang.indexOf(lang) !== -1) return true;
    return false;
}