import mock from '@/shared/mock';
import { CartItem, CartPopulatedItem } from '@/entities/cart';

const cart = {
    async getAll(): Promise<CartPopulatedItem[]> {
        return mock.cart;
    },

    async removeById(id: string): Promise<CartPopulatedItem[]> {
        const index = mock.cart.findIndex((item) => item.id === id);
        if (index === -1) return mock.cart;
        return (mock.cart = mock.cart.filter((item) => item.id !== id));
    },

    async addById(productId: string, quantity: number) {
        const updatedCart = [...mock.cart] as (CartPopulatedItem | CartItem)[];
        const index = updatedCart.findIndex((item) => {
            if ('productId' in item) return item.productId === productId;
            if ('product' in item) return item.product.id === productId;
        });
        if (index !== -1) {
            updatedCart[index].quantity = quantity;
        } else {
            updatedCart.push({
                id: `cart-${crypto.randomUUID()}`,
                quantity,
                productId,
            });
        }
        mock.cart = updatedCart;
    },
};

export default cart;
