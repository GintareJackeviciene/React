import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';
import { addToCart } from '../Actions/booksActions';

export default function Book({ book }) {

    const { types, dispachCart } = useContext(BooksContext);

    return (
        <div className="book">
            {types &&
                <div className="book__type">{types.find(t => t.id === book.type)?.title}</div>
            }
            <div className="book__title">{book.title}</div>
            <div className="book__image">
                <img src={book.img} alt={book.title} />
            </div>
            <div className="book__author">{book.author}</div>
            <div className="book__price">{book.price} EUR</div>
            <button className="btn--add" onClick={_ => dispachCart(addToCart(book.id))}>Į krepšelį</button>
        </div>
    );
}