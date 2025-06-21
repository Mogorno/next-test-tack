import { Product } from '@/entities/product/model/types';
import { API_ROUTES } from '@/shared/config/routes';

async function getAll(): Promise<Product[]> {
    const res = await fetch(API_ROUTES.products, {
        method: 'GET',
        next: { tags: ['products'] },
    });

    return res.json();
}

export default getAll;
