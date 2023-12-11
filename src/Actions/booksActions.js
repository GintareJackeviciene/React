import * as types from '../Constants/actionTypes';

export function loadFromServer(books) {
    return {
        type: types.LOAD_FROM_SERVER,
        payload: books
    };
}

export function filterBooks(typeId) {
    return {
        type: types.FILTER_BOOKS,
        payload: parseInt(typeId)
    };
}

export function sortBooks(sortBy) {
    return {
        type: types.SORT_BOOKS,
        payload: parseInt(sortBy)
    };
}