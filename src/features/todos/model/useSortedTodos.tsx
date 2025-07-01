import { Todo } from '@/entities';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const useSortedTodos = (todos: Todo[]) => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort');

    const sortedTodos = useMemo(() => {
        switch (sort) {
            case 'a-Z':
                return todos.sort((a, b) => a.title.localeCompare(b.title));
            case 'z-A':
                return todos.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return todos;
        }
    }, [todos, sort]);

    return sortedTodos;
};

export default useSortedTodos;
