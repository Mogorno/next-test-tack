import { Product, ProductSortType } from '@/entities/product';

type SortProductsFn = (
    products: Product[],
    sortType: ProductSortType,
    search?: string
) => Product[];

export const sortProducts: SortProductsFn = (products, sortType, search) => {
    switch (sortType) {
        case 'search':
            return [...products].filter((product) =>
                product.title
                    .toLowerCase()
                    .includes(search?.toLowerCase() ?? '')
            );
        case 'price-asc':
            return [...products].sort((a, b) => a.price - b.price);

        case 'price-desc':
            return [...products].sort((a, b) => b.price - a.price);

        case 'title-asc':
            return [...products].sort((a, b) => a.title.localeCompare(b.title));

        case 'title-desc':
            return [...products].sort((a, b) => b.title.localeCompare(a.title));

        default:
            return products;
    }
};
