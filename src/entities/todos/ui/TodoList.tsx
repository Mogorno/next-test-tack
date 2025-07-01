import {
    AnimatePresence,
    LayoutGroup,
    motion,
    MotionProps,
    Variants,
} from 'motion/react';

import { Todo as TodoType } from '../model/types';
import TodoItem from './TodoItem';

type MotionUlProps = MotionProps & React.ComponentProps<'ul'>;

interface TodoListProps extends MotionUlProps {
    Actions?: (todo: TodoType) => React.ReactNode;
    todos: TodoType[];
}

const variants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

const TodoList = ({ todos, Actions, ...restProps }: TodoListProps) => {
    return (
        <LayoutGroup>
            <motion.ul
                variants={variants}
                animate="visible"
                initial="hidden"
                layout
                className="flex flex-col gap-4"
                {...restProps}
            >
                <AnimatePresence>
                    {todos.map((todo) => (
                        <motion.li
                            className="w-full"
                            variants={variants}
                            animate="visible"
                            initial="hidden"
                            exit="hidden"
                            layout
                            key={todo.id}
                        >
                            <TodoItem Actions={Actions} {...todo} />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </LayoutGroup>
    );
};

export default TodoList;
