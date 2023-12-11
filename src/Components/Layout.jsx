import { useContext } from 'react';
import { BooksContext } from '../Components/BooksContext';

import Books from './Books';
import Loading from './Loading';
import Top from './Top';

export default function Layout() {

    const { books } = useContext(BooksContext);

    return (
        <>
            <Top />
            {
                books === null
                ? <Loading />
                : <Books />
             }
        </>
    );
}