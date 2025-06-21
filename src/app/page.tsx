import { products } from '@/shared/api';
import { ProductsView } from '@/widgets/products';

export default async function Home() {
    const productsList = await products.getAll();
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start px-20 mt-12">
            <ProductsView products={productsList} />
        </main>
    );
}
