import { productsRepository } from './products';
import { cartItemsRepository } from './cartItems';

const db = {
    products: productsRepository,
    cartItems: cartItemsRepository,
};

export default db;
