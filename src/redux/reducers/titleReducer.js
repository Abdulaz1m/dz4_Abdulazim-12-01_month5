import {types} from '../../types'

const initialState = {
    title: "Hello"
}

export const titleReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_TEXT:
            return {...state, title: "new Title"}
        case types.CLEAR_TEXT:
            return {...state, title: ""}
        default:
            return state
    }
}