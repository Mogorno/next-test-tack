type FormProps = React.HTMLProps<HTMLFormElement>;

const Form = ({ ...formProps }: FormProps) => {
    return (
        <form className="flex gap-2" {...formProps}>
            <input
                className="bg-neutral-900 text-white rounded p-1 outline-neutral-400 focus:outline-2 transition-all"
                type="number"
                name="amount"
            />
            <button className="bg-neutral-400 text-black font-bold rounded px-2 hover:bg-neutral-900 hover:text-white transition-all">
                Calculate
            </button>
        </form>
    );
};

export default Form;
