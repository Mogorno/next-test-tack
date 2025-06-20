'use server';

import { CartPopulatedItem } from '@/entities/cart/model';
import { API_ROUTES } from '@/shared/config/routes';

async function getCartItems(): Promise<CartPopulatedItem[]> {
    const res = await fetch(API_ROUTES.cart, {
        method: 'GET',
        next: { tags: ['products'] },
    });
    return res.json();
}

export default getCartItems;
