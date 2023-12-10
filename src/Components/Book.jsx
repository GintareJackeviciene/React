export default function Book({ book }) {

    return (
        <div className="book">
            <div className="book__type">{book.type}</div>
            <div className="book__title">{book.title}</div>
            <div className="book__image">
                <img src={book.img} alt={book.title} />
            </div>
            <div className="book__author">{book.author}</div>
            <div className="book__price">{book.price} EUR</div>
        </div>
    );
}