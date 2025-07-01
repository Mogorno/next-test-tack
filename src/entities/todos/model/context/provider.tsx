'use client';

import { useState, ReactNode, useEffect, useRef } from 'react';
import TodoContext from './context';
import { Todo } from '../types';

const TodoProvider = ({ children }: { children: ReactNode }) => {
    const isFirstRender = useRef(true);
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: Todo) => {
        setTodos((prev) => [...prev, todo]);
    };

    const toggleTodo = (id: string, completed?: boolean) => {
        setTodos((prev) =>
            prev.map((t) =>
                t.id === id
                    ? { ...t, completed: completed ? completed : !t.completed }
                    : t
            )
        );
    };

    const removeTodo = (id: string) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    useEffect(() => {
        if (isFirstRender.current) {
            const storesTodos = window.localStorage.getItem('todos');
            if (storesTodos) {
                setTodos(JSON.parse(storesTodos));
            }
        }

        if (window) {
            if (todos.length > 0) {
                window.localStorage.setItem('todos', JSON.stringify(todos));
            } else {
                window.localStorage.removeItem('todos');
            }
        }

        return () => {
            isFirstRender.current = false;
        };
    }, [todos]);

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, toggleTodo, removeTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
