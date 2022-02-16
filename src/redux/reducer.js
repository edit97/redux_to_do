import {actions} from "./actionTypes";

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case actions.GET_LIST:
            return [...state, ...payload]
        case actions.ADD_ROW:
            payload.editing = false
            return [payload, ...state]
        case actions.DEL_ROW:
            return [...state.filter(i => i.id !== payload)]
        case actions.EDITABLE:
            let editableState = state.map(item => {
                if (item.id === payload) {
                    item.editing = true
                }
                return item
            })
            return editableState

        case actions.EDIT_ROW:
            let editState = state.map(item => {
                if (item.id === payload.id) {
                    item.editing = false
                    item.title = payload.title
                }
                return item
            })
            return editState
        default:
            return state
    }
}