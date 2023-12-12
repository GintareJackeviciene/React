import * as types from '../Constants/actionTypes';
import { lsRead, lsWrite } from '../Utils/localStorage';

const CART_KEY = 'cart';

export default function cartReducer(state, action) {

    let s = [...state];


    switch (action.type) {
        case types.ADD_TO_CART:
            if (!s.find(b => b.id === action.payload)) {
                s.push({ id: action.payload, quantity: 1 });
            } else {
                s.find(b => b.id === action.payload).quantity++;
            }
            lsWrite(CART_KEY, s);
            break;
        case types.REMOVE_FROM_CART:
            if (s.find(b => b.id === action.payload).quantity > 1) {
                s.find(b => b.id === action.payload).quantity--;
            } else {
                s = s.filter(b => b.id !== action.payload);
            }
            lsWrite(CART_KEY, s);
            break;
        case types.READ_LS_CART:
            s = lsRead(CART_KEY);
            console.log(s);
            break;
        default:
            break;
    }







    return s;


}