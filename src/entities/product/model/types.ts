export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export type ProductCardVariants = 'list' | 'large' | 'grid';

type SortMethods = 'asc' | 'desc';

type SortedProductsFields = keyof Pick<Product, 'title' | 'price' | 'category'>;

type SortedProductsMethods<T> = T extends string
    ? `${T}-${SortMethods}`
    : never;

export type ProductSortType =
    | SortedProductsMethods<SortedProductsFields>
    | 'search';
