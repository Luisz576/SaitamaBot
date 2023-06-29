export type Either<L, R> = Left<L, R> | Right<L, R>

export class Left<L, R>{
    value: L
    constructor(value: L){
        this.value = value
    }
    isLeft(): Boolean{
        return true
    }
    isRight(): Boolean{
        return false
    }
}

export class Right<L, R>{
    value: R
    constructor(value: R){
        this.value = value
    }
    isLeft(): Boolean{
        return false
    }
    isRight(): Boolean{
        return true
    }
}

export const left = <L, R>(l: L): Either<L, R> => {
    return new Left(l)
}

export const right = <L, R>(r: R): Either<L, R> => {
    return new Right(r)
}