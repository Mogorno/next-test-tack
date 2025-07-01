import { Todo, useTodos } from '@/entities';

const Actions = ({ id }: Todo) => {
    const { removeTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        removeTodo(id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button
                className="px-2 rounded bg-neutral-800 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                name="delete"
            >
                Delete
            </button>
        </form>
    );
};

export default Actions;
