import { getProducts } from '@/shared/api/products';
import { ProductsList } from '@/widgets/products/ui/ProductsList';

export default async function Home() {
    const products = await getProducts();
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start px-20 mt-12">
            <ProductsList products={products} />
        </main>
    );
}
