import { createContext } from 'react';
import { Todo } from '../types';

export type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    toggleTodo: (id: string, completed?: boolean) => void;
    removeTodo: (id: string) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;
