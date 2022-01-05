import { type } from 'os'
import React from 'react'

type RandomNumberType = {
    value : number
}

type PositiveType = RandomNumberType & {
    isPositive: boolean 
    isNegative ?: never
    isZero ?: never 
}
type NegativeType = RandomNumberType & {
    isPositive?: never
    isNegative: boolean 
    isZero?: never   
}
type ZeroType = RandomNumberType & {
    isPositive?: never
    isNegative: never 
    isZero: boolean   
}

type RandomNumberProps = PositiveType | NegativeType | ZeroType

function RandomNumber({value,isPositive,isNegative,isZero}:RandomNumberProps) {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'}{' '} {isZero && 'Zero'}
        </div>
    )
}

export default RandomNumber
