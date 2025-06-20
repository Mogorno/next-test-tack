'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

type SortType = 'asc' | 'desc' | 'default' | string;

type Props<T> = {
    items: T[];
    sortFn: (items: T[], sort: SortType) => T[];
    children: (sorted: T[], restProps: Omit<Props<T>, 'children'>) => ReactNode;
};

export function SortItems<T>({ items, sortFn, children, ...rest }: Props<T>) {
    const searchParams = useSearchParams();
    const sort = (searchParams.get('sort') as SortType) ?? 'default';
    const sorted = sortFn(items, sort);

    return <>{children(sorted, { items, sortFn, ...rest })}</>;
}
