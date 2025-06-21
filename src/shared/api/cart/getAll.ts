'use server';

import { CartPopulatedItem } from '@/entities/cart/model';
import { API_ROUTES } from '@/shared/config/routes';

async function getAll(): Promise<CartPopulatedItem[]> {
    const res = await fetch(API_ROUTES.cart, {
        method: 'GET',
        next: { tags: ['cart'] },
    });
    return res.json();
}

export default getAll;
