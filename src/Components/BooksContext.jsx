import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import booksReducer from '../Reducers/booksReducer';
import axios from 'axios';
import { loadFromServer, filterBooks, sortBooks } from '../Actions/booksActions';

export const BooksContext = createContext();

const BOOKS_URL = 'https://in3.dev/knygos/';
const BOOKS_TYPES_URL = 'https://in3.dev/knygos/types/';

export const BooksProvider = ({ children }) => {

    const [books, dispachBooks] = useReducer(booksReducer, null);
    const [types, setTypes] = useState(null);
    const [filter, setFilter] = useState(0);
    const [sort, setSort] = useState(0);

    const filterLoaded = useRef(false);
    const sortLoaded = useRef(false);

    useEffect(_ => {
        axios.get(BOOKS_URL)
            .then(res => dispachBooks(loadFromServer(res.data)))
            .catch(err => console.log(err));
    }, []);

    useEffect(_ => {
        axios.get(BOOKS_TYPES_URL)
            .then(res => setTypes(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(_ => {
        if (!filterLoaded.current) {
            filterLoaded.current = true;
            return;
        }
        dispachBooks(filterBooks(filter));
    }, [filter]);

    useEffect(_ => {
        if (!sortLoaded.current) {
            sortLoaded.current = true;
            return;
        }
        dispachBooks(sortBooks(sort));
    }, [sort]);



    return (
        <BooksContext.Provider value={{
            books,
            dispachBooks,
            types,
            setTypes,
            filter, 
            setFilter,
            sort,
            setSort
        }}>
            {children}
        </BooksContext.Provider>
    );
};