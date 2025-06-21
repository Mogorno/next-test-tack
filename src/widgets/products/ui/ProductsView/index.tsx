'use client';

import { Product, ProductCardAction, ProductsList } from '@/entities/product';
import {
    SortProductsActions,
    ViewProductsActions,
    useViewVariant,
    useSortProducts,
} from '@/features/products';
import { cart } from '@/shared/api';
import { APP_ROUTES } from '@/shared/config';
import Link from 'next/link';

interface ProductsViewProps {
    products: Product[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
    const { variant, changeVariant } = useViewVariant();
    const sortedProducts = useSortProducts(products);
    return (
        <div className="w-full">
            <div className="flex justify-between py-2">
                <SortProductsActions />
                <ViewProductsActions
                    currentVariant={variant}
                    onChangeVariant={changeVariant}
                />
            </div>
            <ProductsList
                actions={ProductsActions}
                products={sortedProducts}
                variant={variant}
            />
        </div>
    );
};

export default ProductsView;

const ProductsActions: ProductCardAction = (product) => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <Link
                className="bg-neutral-900 px-2 rounded"
                href={APP_ROUTES.product(product.id)}
            >
                View
            </Link>
            <button
                className="bg-neutral-900 px-2 rounded"
                onClick={() => cart.addById(product.id, 1)}
            >
                Add to cart
            </button>
        </div>
    );
};
