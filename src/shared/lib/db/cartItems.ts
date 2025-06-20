import mock from '@/shared/mock';
import { CartPopulatedItem } from '@/entities/cart/model';

export const cartItemsRepository = {
    async get(): Promise<CartPopulatedItem[]> {
        return mock.cart;
    },

    async remove(id: string): Promise<CartPopulatedItem[]> {
        const index = mock.cart.findIndex((item) => item.id === id);
        if (index === -1) return mock.cart;
        return (mock.cart = mock.cart.filter((item) => item.id !== id));
    },
};
