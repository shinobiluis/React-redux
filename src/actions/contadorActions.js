import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types"

export const sumar = () => {
    return {type:INCREMENT};
}
export const restar = () => {
    return {type:DECREMENT};
}
export const sumar5 = () => {
    return {type:INCREMENT_5, payload: 5};
}
export const restar5 = () => {
    return {type:DECREMENT_5, payload: 5};
}

export const reset = () => {
    return {type:RESET};
}