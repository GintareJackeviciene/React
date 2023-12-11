import * as types from '../Constants/actionTypes';

export default function booksReducer(state, action) {

    let s = state === null ? null : [...state];

    switch (action.type) {
        case types.LOAD_FROM_SERVER:
            s = action.payload.map((book, i) => ({ ...book, show: true, row: i }));
            break;
        case types.FILTER_BOOKS:
            if (action.payload === 0) {
                s = s.map(book => ({ ...book, show: true }));
                break;
            }
            s = s.map(book => book.type === action.payload ? { ...book, show: true } : { ...book, show: false });
            break;
        case types.SORT_BOOKS:
            switch (action.payload) {
                case 0:
                    s = s.sort((a, b) => a.row - b.row);
                    break;
                case 1:
                    s = s.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 2:
                    s = s.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 3:
                    s = s.sort((a, b) => a.price - b.price);
                    break;
                case 4:
                    s = s.sort((a, b) => b.price - a.price);
                    break;
                default:
            }
            break;
        default:
    }

    return s;

}