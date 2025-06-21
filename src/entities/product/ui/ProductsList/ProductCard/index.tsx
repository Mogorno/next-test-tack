import {
    Product,
    ProductCardAction,
    ProductCardVariants,
} from '@/entities/product';
import LargeItem from './LargeItem';
import ListItem from './ListItem';
import GridItem from './GridItem';

const variants = {
    large: LargeItem,
    list: ListItem,
    grid: GridItem,
};

export interface ProductCardBaseProps extends Product {
    actions?: ProductCardAction;
}

interface ProductCardProps extends ProductCardBaseProps {
    variant?: ProductCardVariants;
}

const ProductCard = ({ variant = 'large', ...restProps }: ProductCardProps) => {
    const ProductCard = variants[variant];
    return <ProductCard {...restProps} />;
};

export default ProductCard;
