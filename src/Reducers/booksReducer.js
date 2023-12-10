import * as types from '../Constants/actionTypes';


export default function booksReducer(state, action) {

    let s = state === null ? null : [...state];

    switch (action.type) {
        case types.LOAD_FROM_SERVER:
            return s = action.payload;
        default:
    }

    return s;

}