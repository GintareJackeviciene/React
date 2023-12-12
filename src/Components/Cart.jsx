import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';
import { removeFromCart } from '../Actions/booksActions';

import { cartSvg } from './svg';





export default function Cart() {

    const { cart, books, dispachCart } = useContext(BooksContext);

    const total = _ => {
        let sum = 0;
        cart.forEach(c => {
            const price = books.find(b => b.id === c.id).price;
            const lineTotal = price * c.quantity;
            sum += lineTotal;
        });
        return sum.toFixed(2);
    }

    if (null === books) {
        return null;
    }

    return (
        <div className="cart">
            <div className="cart-top">
                <div className="cart-count">{cart.length}</div>
                {cartSvg}
            </div>
            <div className="cart-list">
                {cart.length > 0 ?
                    cart.map(c => (
                        <div className="cart-item" key={c.id}>
                            <div className="cart-item__title">{books.find(b => b.id === c.id).title}</div>
                            <div className="cart-item__count">{c.quantity}</div>
                            <div className="cart-item__price">{(books.find(b => b.id === c.id).price * c.quantity).toFixed(2)}</div>
                            <div className="cart-item__remove" onClick={_ => dispachCart(removeFromCart(c.id))}>X</div>
                        </div>
                    ))
                    : <div className="cart-item">Krepšelis tuščias</div>
                }
            </div>
            {
                cart.length > 0 && <div className="total">Bendrai: {total()} EUR</div>
            }
            
            
        </div>
    );
}