import { useContext } from "react";
import { BooksContext } from '../Components/BooksContext';

export default function Book({ book }) {
    const {types}= useContext(BooksContext);

    return (
        <div className="book">
               <div className="book__type">{types.find(t => t.id === book.type)?.title}</div>
            <div className="book__title">{book.title}</div>
            <div className="book__image">
                <img src={book.img} alt={book.title} />
            </div>
            <div className="book__author">{book.author}</div>
            <div className="book__price">{book.price} EUR</div>
        </div>
    );
}