import { createContext, useState } from 'react';
import { CartItem } from './types';

type CartContextType = {
    items: CartItem[];
    addItem: (id: string, quantity?: number) => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;
    updateQuantity: (productId: string, quantity: number) => void;
    totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState([]);

    const addItem = (item: string) => {
        setItems([...items, item]);
    };

    const removeItem = (productId: string) => {
        setItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const clearCart = () => setItems([]);

    const updateQuantity = (productId: string, quantity: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                addItem,
                removeItem,
                clearCart,
                updateQuantity,
                totalItems,
                items,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
