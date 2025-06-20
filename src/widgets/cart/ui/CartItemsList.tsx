'use client';

import { CartPopulatedItem } from '@/entities/cart/model';
import { deleteCartItemById } from '@/shared/api/cartItems';

const CartItemsList = ({ cartItems }: { cartItems: CartPopulatedItem[] }) => {
    return (
        <div className="mt-24 grid grid-cols-3 gap-4">
            {cartItems.map((item) => (
                <div key={item.id} className="w-full">
                    <h1>{item.product.title}</h1>
                    <p>{item.product.description}</p>
                    <p>${item.product.price}</p>
                    <p>${item.quantity}</p>
                    <button
                        onClick={async () => {
                            deleteCartItemById(item.id);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CartItemsList;
