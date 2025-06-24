'use server';

import { CartPopulatedItem } from '@/entities/cart/model';
import { API_ROUTES } from '@/shared/config/routes';
import { revalidateTag } from 'next/cache';

type UpdateCartItem = {
    id: string;
} & Partial<Omit<CartPopulatedItem, 'id'>>;

async function updateOne({ id, ...body }: UpdateCartItem) {
    await fetch(`${API_ROUTES.cartItem(id)}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
    });

    revalidateTag('cart');
}

export default updateOne;
