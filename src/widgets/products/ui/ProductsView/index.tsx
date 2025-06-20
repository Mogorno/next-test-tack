'use client';

import { Product, ProductsList } from '@/entities/product';
import {
    SortProductsActions,
    ViewProductsActions,
    useViewVariant,
    useSortProducts,
} from '@/features/products';

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
            <ProductsList products={sortedProducts} variant={variant} />
        </div>
    );
};

export default ProductsView;
