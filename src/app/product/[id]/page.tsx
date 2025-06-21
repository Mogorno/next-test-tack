import { products } from '@/shared/api';
import { ProductCard } from '@/widgets/products';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    if (!id) return notFound();
    const product = await products.getById(id);
    return (
        <div>
            <ProductCard {...product} />
        </div>
    );
};

export default ProductPage;
