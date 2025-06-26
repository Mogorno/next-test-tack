const NominalsTable = ({
    nominals,
}: {
    nominals: { nominal: number; value: number; inStock: number }[];
}) => {
    const fields = ['inStock', 'value'];

    const capitalize = (str: string) => {
        const [first, ...rest] = str;
        return `${first.toUpperCase()}${rest.join('')}`;
    };
    return (
        <table className="table-auto border-collapse border border-neutral-300">
            <thead>
                <tr>
                    <th className="border px-2 py-1 font-semibold bg-neutral-300 text-black">
                        Nominals
                    </th>
                    {nominals.map((item) => (
                        <th
                            key={item.nominal}
                            className="border px-2 py-1 bg-neutral-800 text-bl"
                        >
                            {item.nominal}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {fields.map((field) => (
                    <tr key={field}>
                        <td className="border px-2 py-1 font-semibold bg-neutral-300 text-black">
                            {capitalize(field)}
                        </td>
                        {nominals.map((item) => {
                            return (
                                <td
                                    key={`${field}-${item.nominal}`}
                                    className="border px-2 py-1 text-center text-white"
                                >
                                    {item[field as keyof typeof item]}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NominalsTable;
