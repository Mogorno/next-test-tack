'use client';

import { NominalsTable } from '@/entities/nominals';
import { Form } from '@/features/atm';
import { useActionState, useMemo } from 'react';
import { calcNominalAction } from '../model';

type InitialState = {
    amount: number;
    change: number;
    message?: string;
    nominals: {
        nominal: number;
        inStock: number;
        value: number;
    }[];
};

const AtmCalculator = ({
    nominalsApi,
}: {
    nominalsApi: { nominal: number; inStock: number }[];
}) => {
    const InitialState: InitialState = useMemo(() => {
        return {
            amount: 0,
            change: 0,
            nominals: nominalsApi.map((nominal) => ({
                ...nominal,
                value: 0,
            })),
        };
    }, [nominalsApi]);

    const [{ nominals, amount, change, message }, action, isPending] =
        useActionState(calcNominalAction, InitialState);

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">ATM Calculator</h1>

            <div className="flex gap-4">
                <div className=" flex flex-col gap-2 justify-center items-center">
                    <NominalsTable nominals={nominals} />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-neutral-500">Amount:</p>
                    <span>{amount}</span>
                    <p className="text-neutral-500">Remainder:</p>
                    <span>{change}</span>
                </div>
            </div>
            <Form action={action} />
            {isPending && <p>Loading...</p>}
            {!isPending && message && <p>{message}</p>}
        </div>
    );
};

export default AtmCalculator;
