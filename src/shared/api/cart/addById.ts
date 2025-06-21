'use server';

import { API_ROUTES } from '@/shared/config/routes';
import { revalidateTag } from 'next/cache';

async function add(productId: string, quantity: number) {
    await fetch(API_ROUTES.cart, {
        method: 'POST',
        body: JSON.stringify({ productId, quantity }),
    });

    revalidateTag('cart');
}

export default add;
