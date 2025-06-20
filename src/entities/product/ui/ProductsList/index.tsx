import { Product, ProductCardVariants } from '@/entities/product';
import ProductCard from './ProductCard';

type ProductsListProps = {
    products: Product[];
    variant?: ProductCardVariants;
};

const variants: Record<ProductCardVariants, string> = {
    list: 'grid grid-cols-1 gap-4',
    large: 'grid grid-cols-4 gap-4',
    grid: 'grid grid-cols-3 gap-4',
};

const ProductsList: React.FC<ProductsListProps> = ({
    products,
    variant = 'grid',
}) => {
    return (
        <ul className={`${variants[variant]} w-full`}>
            {products.map((product) => (
                <ProductCard variant={variant} key={product.id} {...product} />
            ))}
        </ul>
    );
};

export default ProductsList;
