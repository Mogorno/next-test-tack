import { CartItem, CartPopulatedItem } from '@/entities/cart/model';
import cartItems from './cartItems';
import products from './products';

const mock = {
    products,
    cartItems,
    get cart(): CartPopulatedItem[] {
        return this.cartItems.reduce((acc, { productId, ...rest }) => {
            const product = products.find((product) => product.id == productId);
            if (!product) return acc;
            acc.push({ ...rest, product });
            return acc;
        }, [] as CartPopulatedItem[]);
    },
    set cart(newCartItems: CartPopulatedItem[] | CartItem[]) {
        this.cartItems = newCartItems.map(({ quantity, id, ...rest }) => {
            let productId;

            if ('productId' in rest) productId = rest.productId;
            else productId = rest.product.id;
            return {
                id,
                quantity,
                productId,
            };
        });
    },
};

export default mock;
