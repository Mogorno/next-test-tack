import { Product, ProductCardVariants } from '@/entities/product';
import LargeItem from './LargeItem';
import ListItem from './ListItem';
import GridItem from './GridItem';

const variants = {
    large: LargeItem,
    list: ListItem,
    grid: GridItem,
};

interface ProductCardProps extends Product {
    variant?: ProductCardVariants;
}

const ProductCard = ({ variant = 'large', ...product }: ProductCardProps) => {
    const ProductCard = variants[variant];
    return <ProductCard {...product} />;
};

export default ProductCard;
