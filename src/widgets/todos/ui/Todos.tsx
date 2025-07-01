'use client';

import { TodoProvider, useTodos } from '@/entities/todos';
import { TodoList } from '@/entities/todos';
import { Actions, Form, SortActions, useSortedTodos } from '@/features/todos';

const Todos = () => {
    const { todos, toggleTodo } = useTodos();
    const sortedTodos = useSortedTodos(todos);

    const handleOnClick = (e: React.MouseEvent<Element>) => {
        const target = e.target as HTMLInputElement;
        if (target.name === 'completed') {
            const id = target.getAttribute('data-id') ?? '';
            const checked = target.checked;
            toggleTodo(id, checked);
        }
    };
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Form />
            <SortActions />
            <TodoList
                onClick={handleOnClick}
                todos={sortedTodos}
                Actions={Actions}
            />
        </div>
    );
};

const TodosWithProvider = () => (
    <TodoProvider>
        <Todos />
    </TodoProvider>
);

export default TodosWithProvider;
