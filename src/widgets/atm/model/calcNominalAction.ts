'use server';

import { calculateAtm } from '@/features/atm';
import { db } from '@/shared/lib';

type PrevState = {
    amount: number;
    change: number;
    message?: string;
    nominals: {
        nominal: number;
        inStock: number;
        value: number;
    }[];
};

const calcNominalAction = async (
    prevState: PrevState,
    formData: FormData
): Promise<PrevState> => {
    const amount = Number(formData.get('amount'));
    try {
        if (!amount) return prevState;

        const nominalsInStock = await db.nominals.getAll();

        const [newNominals, change] = calculateAtm(nominalsInStock, amount);

        return {
            amount,
            change,
            nominals: newNominals,
        };
    } catch {
        return {
            ...prevState,
            message: 'Something went wrong',
            change: 0,
            amount,
        };
    }
};

export default calcNominalAction;
