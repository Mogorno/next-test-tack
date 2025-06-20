'use server';

import { API_ROUTES } from '@/shared/config/routes';
import { revalidateTag } from 'next/cache';

async function deleteCartItemById(id: string) {
    await fetch(API_ROUTES.cartItem(id), {
        method: 'DELETE',
    });

    revalidateTag('products');
}

export default deleteCartItemById;
