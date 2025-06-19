import { Product } from '@/entities/product/model/types';
import { API_ROUTES } from '@/shared/config/routes';

async function getProducts(): Promise<Product[]> {
    const res = await fetch(API_ROUTES.products);

    return res.json();
}

export default getProducts;
