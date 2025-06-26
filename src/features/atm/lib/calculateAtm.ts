type NominalType = { nominal: number; inStock: number };

type NominalResultType = { nominal: number; inStock: number; value: number };

const calculateAtm = <T extends NominalType[]>(
    nominals: T,
    amount: number
): [NominalResultType[], number] => {
    if (!amount) {
        return [
            nominals.map((nominal) => ({
                ...nominal,
                value: 0,
            })),
            0,
        ];
    }

    let change = amount;

    const nominalsList: NominalResultType[] = new Array(nominals.length + 1);

    for (let i = nominals.length - 1; i >= 0; i--) {
        const { nominal, inStock } = nominals[i];

        const value = Math.floor(change / nominal);

        if (inStock > 0 && value > 0) {
            if (value <= inStock) {
                nominalsList[i] = { nominal, inStock, value };
                change = change % nominal;
            } else {
                const calcValue = value - inStock;
                nominalsList[i] = { nominal, value: inStock, inStock };
                change = (change % nominal) + calcValue * nominal;
            }
        } else {
            nominalsList[i] = { nominal, value: 0, inStock };
        }
    }

    return [nominalsList, change];
};

export default calculateAtm;
