export type Role = 'member' | 'sub' | 'vip' | 'mvp' | 'adm'

export function isAdm(id: number){
    return id == 99
}

export function getRole(id: number | undefined, default_return: Role = 'member'): Role{
    if(!id) return default_return
    switch(id){
        case 0:
            return 'member'
        case 5:
            return 'sub'
        case 10:
            return 'vip'
        case 15:
            return 'mvp'
        case 99:
            return 'adm'
    }
    return default_return
}