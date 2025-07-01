'use client';

import { useEffect, useRef } from 'react';

type FocusInputProps = React.ComponentProps<'input'>;

const FocusInput = ({ ...props }: FocusInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            className="focus:outline-2 outline-neutral-300 bg-neutral-800 rounded"
            ref={inputRef}
            {...props}
        />
    );
};

export default FocusInput;
