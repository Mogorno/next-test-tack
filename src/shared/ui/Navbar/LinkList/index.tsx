'use client';

import { APP_ROUTES } from '@/shared/config/routes';
import LinkItem from './LinkItem';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', URL: APP_ROUTES.home },
    { name: 'Cart', URL: APP_ROUTES.cart },
    { name: 'ATM', URL: APP_ROUTES.atm },
];

const LinkList = () => {
    const pathname = usePathname();

    return (
        <ul className="flex items-center justify-center gap-4 text-xl font-bold h-full">
            {links.map((link) => (
                <LinkItem
                    key={link.name}
                    isActive={pathname === link.URL.pathname}
                    {...link}
                />
            ))}
        </ul>
    );
};

export default LinkList;
