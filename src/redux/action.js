import {actions} from "./actionTypes";
import {request} from "./request";

export function getList() {
    return dispatch => {
        return request()
            .then(({data}) => {
                dispatch({
                    type: actions.GET_LIST,
                    payload: data.reverse()
                });
            })
    }
}

export function addRow(item) {
    return {type: actions.ADD_ROW, payload: item}
}

export function delRow(itemId) {
    return {type: actions.DEL_ROW, payload: itemId}
}

export function editable(item) {
    return {type: actions.EDITABLE, payload: item}
}

export function editRow(item) {
    return {type: actions.EDIT_ROW, payload: item}
}