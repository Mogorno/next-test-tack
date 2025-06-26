const Item = ({ nominal, value }: { nominal: number; value: number }) => {
    return (
        <li className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{nominal}</span>
            <hr className="w-full border-t-2 border-white/50" />
            <span>{value}</span>
        </li>
    );
};

export default Item;
