import { Product } from '@/entities/product/model/types';
import ProductItem from './ProductItem';

type ProductsListProps = {
    products: Product[];
    variant?: 'list' | 'card' | 'grid';
};

const variants: Record<string, string> = {
    list: 'grid grid-cols-1 gap-4',
    card: 'grid grid-cols-4 gap-4',
    grid: 'grid grid-cols-3 gap-4',
};

export const ProductsList: React.FC<ProductsListProps> = ({
    products,
    variant = 'grid',
}) => {
    return (
        <ul className={`${variants[variant]} w-full`}>
            {products.map((product) => (
                <ProductItem variant={variant} key={product.id} {...product} />
            ))}
        </ul>
    );
};
