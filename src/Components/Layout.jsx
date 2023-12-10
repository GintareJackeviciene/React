import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';

import Books from './Books';
import Loading from './Loading';

export default function Layout() {

    const { books } = useContext(BooksContext);

    return (
        <>
            {
                books === null
                ? <Loading />
                : <Books />
             }
        </>
    );
}