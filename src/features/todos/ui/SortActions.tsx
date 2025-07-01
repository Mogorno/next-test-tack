'use client';

import { useRouter } from 'next/navigation';

const SortActions = () => {
    const router = useRouter();

    const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.name;
        if (name) {
            router.push(`?sort=${name}`);
        }
    };
    return (
        <div className="flex gap-4 items-center justify-center">
            <button
                className="hover:text-neutral-800 hover:bg-neutral-300 px-2 rounded transition-all"
                name="a-Z"
                onClick={handleSort}
            >
                a-Z
            </button>
            <button
                className="hover:text-neutral-800 hover:bg-neutral-300 px-2 rounded transition-all"
                name="z-A"
                onClick={handleSort}
            >
                z-A
            </button>
        </div>
    );
};

export default SortActions;
