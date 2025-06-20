import { getCartItems } from '@/shared/api/cartItems';
import CartItemsList from '@/widgets/cart/ui/CartItemsList';

const Cart = async () => {
    const cartItems = await getCartItems();

    return (
        <div className="mt-24">
            <CartItemsList cartItems={cartItems} />
        </div>
    );
};

export default Cart;
