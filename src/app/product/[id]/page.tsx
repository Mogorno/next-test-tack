import getProductById from '@/shared/api/products/getProductById';
import ProductCard from '@/widgets/products/ui/ProductCard';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    if (!id) return notFound();
    const product = await getProductById(id);
    return (
        <div>
            <ProductCard {...product} />
        </div>
    );
};

export default ProductPage;
