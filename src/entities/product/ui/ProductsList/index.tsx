import {
    Product,
    ProductCardAction,
    ProductCardVariants,
} from '@/entities/product';
import ProductCard from './ProductCard';

type ProductsListProps = {
    products: Product[];
    variant?: ProductCardVariants;
    actions?: ProductCardAction;
};

const variants: Record<ProductCardVariants, string> = {
    list: 'grid gap-4 grid-cols-1',
    large: 'grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    grid: 'grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

const ProductsList: React.FC<ProductsListProps> = ({
    actions,
    products,
    variant = 'grid',
}) => {
    return (
        <ul className={`${variants[variant]} w-full`}>
            {products.map((product) => (
                <ProductCard
                    variant={variant}
                    key={product.id}
                    actions={actions}
                    {...product}
                />
            ))}
        </ul>
    );
};

export default ProductsList;
