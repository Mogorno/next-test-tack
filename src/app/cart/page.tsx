import { cart } from '@/shared/api';
import { CartItemsList } from '@/widgets/cart/';

const Cart = async () => {
    const cartItems = await cart.getAll();

    return (
        <div className="mt-24">
            <CartItemsList cartItems={cartItems} />
        </div>
    );
};

export default Cart;
