import { Product } from '@/entities/product/model';
import ProductItemCard from './ProductItemCard';
import ProductItemList from './ProductItemList';
import ProductItemGrid from './ProductItemGrid';

const variants = {
    list: ProductItemList,
    card: ProductItemCard,
    grid: ProductItemGrid,
};

interface ProductItemProps extends Product {
    variant?: keyof typeof variants;
}

const ProductItem = ({ variant = 'card', ...product }: ProductItemProps) => {
    const ProductItem = variants[variant];
    return <ProductItem {...product} />;
};

export default ProductItem;
