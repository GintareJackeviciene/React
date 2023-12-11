import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';

export default function Sort() {

    const { sort, setSort } = useContext(BooksContext);

    const sorts = [
        { id: 0, title: 'X' },
        { id: 1, title: 'A-Z' },
        { id: 2, title: 'Z-A' },
        { id: 3, title: '0-9' },
        { id: 4, title: '9-0' },
    ];

    return (
        <div className="sort">
            <div className="sort__title">Rūšiavimas</div>
            <div className="sort__buttons">
                {
                    sorts.map(s => <div className="sort__button" style={{
                        color: s.id === sort ? 'crimson' : null,
                        cursor: s.id === sort ? 'default' : 'pointer'
                    }}
                        key={s.id}
                        onClick={_ => setSort(s.id)}
                    >{s.title}</div>)
                }
            </div>
        </div>
    );
}