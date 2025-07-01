import { useTodos, validationScheme } from '@/entities';

type FormProps = React.ComponentProps<'form'>;

const Form = ({ ...props }: FormProps) => {
    const { todos, addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') ?? '';
        const completed = Boolean(formData.get('completed')) ?? false;

        const todo = {
            id: crypto.randomUUID(),
            title,
            completed,
        };

        const validatedTodo = validationScheme.safeParse(todo);

        if (validatedTodo.success && !todos.some((t) => t.title === title)) {
            addTodo(validatedTodo.data);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-4 items-center justify-center"
            {...props}
        >
            <input
                className="w-4 text-black bg-neutral-800 checked:bg-amber-500 aspect-square"
                type="checkbox"
                name="completed"
            />
            <input
                className="focus:outline-none bg-neutral-800 px-2 rounded text-white"
                type="text"
                name="title"
            />
            <button className="bg-neutral-300 px-2 rounded text-black hover:bg-neutral-800 hover:text-white transition-all">
                Add
            </button>
        </form>
    );
};

export default Form;
