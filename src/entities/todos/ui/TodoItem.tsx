import { memo } from 'react';
import { Todo as TodoType } from '../model/types';

interface TodoProps extends TodoType {
    Actions?: (todo: TodoType) => React.ReactNode;
}

const TodoItem = ({ Actions, ...todo }: TodoProps) => {
    const { id, title, completed } = todo;
    return (
        <div className="flex items-center gap-4 w-full justify-between">
            <input
                defaultChecked={completed}
                name="completed"
                type="checkbox"
                data-id={id}
            />
            <p className="flex-1">{title}</p>
            {Actions && <Actions {...todo} />}
        </div>
    );
};

export default memo(TodoItem);
