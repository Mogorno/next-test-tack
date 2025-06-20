'use client';

import { ProductSortType } from '@/entities/product';
import { useRouter } from 'next/navigation';

const sortMethods: ProductSortType[] = [
    'price-asc',
    'price-desc',
    'title-asc',
    'title-desc',
];

const SortProductsActions = () => {
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        router.push(`/?sort=search&search=${value}`);
    };

    const handleSort = (e: React.MouseEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value as ProductSortType;
        router.push(`/?sort=${value}`);
    };

    return (
        <div className="flex items-center gap-4">
            <select
                className="bg-neutral-900 p-2 rounded cursor-pointer"
                onClick={handleSort}
                defaultValue={sortMethods[0]}
            >
                {sortMethods.map((method) => (
                    <option key={method} value={method}>
                        {method}
                    </option>
                ))}
            </select>
            <input
                className="outline-none "
                onChange={handleChange}
                type="search"
                placeholder="Search"
            />
        </div>
    );
};

export default SortProductsActions;
