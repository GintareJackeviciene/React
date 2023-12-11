import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';

export default function Filter() {

    const { types, books, filter, setFilter } = useContext(BooksContext);

    if (!types || !books) {
        return (
            <div className="filter">
                <div className="filter__title">Filtravimas</div>
                <select defaultValue={0}>
                    <option value={0} disabled>Kraunasi...</option>
                </select>
            </div>
        );
    }
    return (
        <div className="filter">
            <div className="filter__title">Filtravimas</div>
            <select value={filter} onChange={e => setFilter(e.target.value)}>
                <option value={0}>Visi</option>
                {
                    types.map(type => <option key={type.id} value={type.id}>{type.title}</option>)
                }
            </select>

        </div>
    );
}