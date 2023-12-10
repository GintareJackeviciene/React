import { createContext, useEffect, useReducer } from 'react';
import booksReducer from '../Reducers/booksReducer';
import axios from 'axios';
import { loadFromServer } from '../Actions/booksActions';



export const BooksContext = createContext();

const BOOKS_URL = 'https://in3.dev/knygos/';
const BOOKS_TYPES_URL = 'https://in3.dev/knygos/types/';

export const BooksProvider = ({ children }) => {

    const [books, dispachBooks] = useReducer(booksReducer, null);

    useEffect(_ => {
        axios.get(BOOKS_URL)
            .then(res => dispachBooks(loadFromServer(res.data)))
            .catch(err => console.log(err));
    }, []);

    return (
        <BooksContext.Provider value={{
            books,
            dispachBooks
        }}>
            {children}
        </BooksContext.Provider>
    );



}