export type Language = 'en' | 'pt' | 'es'

export function getLanguage(id: number | undefined, default_return: Language = 'en'): Language {
    if(!id) return default_return
    switch(id){
        case 0:
            return 'en'
        case 1:
            return 'pt'
        case 2:
            return 'es'
    }
    return default_return
}