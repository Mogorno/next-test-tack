import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { Product, ProductSortType } from '@/entities/product';
import { sortProducts } from './sortProducts';

export function useSortProducts(products: Product[]) {
    const searchParams = useSearchParams();

    const sort = (searchParams.get('sort') || 'price-asc') as ProductSortType;
    const search = searchParams.get('search') ?? '';

    const sortedProducts = useMemo(() => {
        return sortProducts(products, sort, search);
    }, [products, sort, search]);

    return sortedProducts;
}
