'use client';

import Link from 'next/link';

const LinkItem = ({
    URL,
    name,
    isActive,
}: {
    isActive: boolean;
    name: string;
    URL: URL;
}) => {
    return (
        <li
            className={`${isActive ? 'text-black bg-white' : 'text-white bg-black'}  hover:opacity-75 py-1 px-4 rounded`}
        >
            <Link href={URL.href}>{name}</Link>
        </li>
    );
};

export default LinkItem;
