import { useState, useEffect, useCallback } from 'react';
import { Book } from './book';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<FetchState>('initial');
    const [error, setError] = useState<Error | null>(null);

    const fetchBooks = useCallback(async () => {
        setState('loading');
        setError(null);
        try {
            const response = await fetch('http://localhost:4730/books');
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}. This page doesn't exist!`);
        }
            const fetchedBooks: Book[] = await response.json();
            setBooks(fetchedBooks);
            setState('success');
        } catch (error) {
            setError(error as Error);
            setState('error');
        }
    }, []);

    useEffect(() => {
        fetchBooks();
        const intervalId = setInterval(fetchBooks, 60000); // refresh every 60 seconds
    
        return () => clearInterval(intervalId); // cleanup
    }, [fetchBooks]);
    
    const refresh = useCallback(() => {
        fetchBooks();
    }, [fetchBooks]);
    
    return { books, state, error, refresh };  
}


