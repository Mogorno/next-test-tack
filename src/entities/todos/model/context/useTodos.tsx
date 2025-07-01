import { useContext } from 'react';
import TodoContext from './context';

export const useTodos = () => {
    const ctx = useContext(TodoContext);
    if (!ctx) {
        throw new Error('useTodos must be used within a TodoProvider');
    }
    return ctx;
};
