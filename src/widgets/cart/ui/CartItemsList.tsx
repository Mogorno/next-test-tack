'use client';

import { CartPopulatedItem } from '@/entities';
import { cart } from '@/shared/api';
import Image from 'next/image';
import React, {
    startTransition,
    useEffect,
    useOptimistic,
    useRef,
    useState,
} from 'react';

const CartItemsList = ({ cartItems }: { cartItems: CartPopulatedItem[] }) => {
    const [cart, setCart] = useState(cartItems);
    const selectedRef = useRef<number | null>(null);

    const [optimisticCart, setOptimisticCart] = useOptimistic(cart);

    const handleOptimisticUpdate = (id: string, quantity: number) => {
        setOptimisticCart((prev) => {
            const newArray = [...prev];
            const index = newArray.findIndex((item) => item.id === id);
            newArray[index].quantity = quantity;
            return newArray;
        });
    };

    const handleOptimisticDelete = (id: string) => {
        setOptimisticCart((prev) => prev.filter((item) => item.id !== id));
    };

    useEffect(() => {
        setCart(cartItems);
    }, [cartItems]);

    const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
        const { index } = e.currentTarget.dataset;
        if (index) selectedRef.current = Number(index);
    };
    const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
        e.currentTarget.style.scale = '1';
    };
    const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
        e.currentTarget.style.scale = '1.1';
    };

    const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
        const { index } = e.currentTarget.dataset;
        const dropIndex = Number(index);

        const selectedIdex = selectedRef.current;

        if (
            typeof dropIndex === 'number' &&
            typeof selectedIdex === 'number' &&
            dropIndex !== selectedIdex
        ) {
            setCart((prev) => {
                const newArray = [...prev];
                const selectedItem = newArray[selectedIdex];
                const dropItem = newArray[dropIndex];
                newArray[selectedIdex] = dropItem;
                newArray[dropIndex] = selectedItem;
                return newArray;
            });
        }
        e.currentTarget.style.scale = '1';
    };

    return (
        <ul className="mt-24 mx-20 flex flex-col gap-4">
            {optimisticCart.map((item, index) => (
                <CartItem
                    handleOptimisticUpdate={handleOptimisticUpdate}
                    handleOptimisticDelete={handleOptimisticDelete}
                    className="transition-all"
                    data-index={index}
                    key={item.id}
                    cartItem={item}
                    draggable
                    onDragLeave={handleDragEnd}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
            ))}
        </ul>
    );
};

interface CartItemProps extends React.ComponentProps<'li'> {
    cartItem: CartPopulatedItem;
    handleOptimisticUpdate: (id: string, quantity: number) => void;
    handleOptimisticDelete: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
    cartItem,
    className,
    handleOptimisticUpdate,
    handleOptimisticDelete,
    ...restProps
}) => {
    const { id, product, quantity } = cartItem;
    return (
        <li
            {...restProps}
            className={`flex items-center justify-between gap-2 p-1 h-16 border border-neutral-800 rounded-lg overflow-hidden
                ${className ? className : ''}`}
        >
            <Image
                className="h-full aspect-square object-cover rounded-sm"
                src={product.image}
                alt={product.title}
                width={50}
                height={50}
            />
            <div className="flex flex-col gap-1 border-r-1 border-neutral-800 w-24 pr-2">
                <h1 className="text-lg">{product.title}</h1>
                <p>
                    <span className="text-sm">Price:</span>{' '}
                    <span className="font-bold">${product.price}</span>
                </p>
            </div>
            <div className="grow h-full shrink border-r-1 border-neutral-800 pr-2 text-sm flex flex-col items-start justify-between gap-1">
                <span>Description:</span>
                <p className="text-sm">{product.description}</p>
            </div>
            <div className="h-full border-r-1 border-neutral-800 pr-2 flex flex-col items-center justify-between gap-1">
                <p className="text-sm flex justify-center items-center">
                    quantity
                </p>
                <div className="text-2xl flex items-center justify-center gap-4 h-full">
                    <button
                        onClick={async () => {
                            startTransition(() => {
                                handleOptimisticUpdate(id, quantity + 1);
                                cart.updateOne({ id, quantity: quantity + 1 });
                            });
                        }}
                        className="h-full aspect-square rounded hover:bg-neutral-900"
                    >
                        +
                    </button>
                    <span className="font-bold w-12 flex items-center justify-center">
                        {quantity}
                    </span>
                    <button
                        onClick={async () => {
                            startTransition(() => {
                                const newQuality =
                                    quantity > 0 ? quantity - 1 : 0;
                                handleOptimisticUpdate(id, quantity);
                                cart.updateOne({ id, quantity: newQuality });
                            });
                        }}
                        className="h-full aspect-square rounded hover:bg-neutral-900"
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center">
                <button
                    className="hover:bg-neutral-900 h-full px-2 rounded w-full"
                    onClick={async () => {
                        startTransition(() => {
                            handleOptimisticDelete(id);
                            cart.removeById(id);
                        });
                    }}
                >
                    Remove
                </button>
                <button className="hover:bg-neutral-900 h-full px-2 rounded w-full">
                    Buy
                </button>
            </div>
        </li>
    );
};

export default CartItemsList;
