const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
    throw new Error(
        'NEXT_PUBLIC_BASE_URL is not defined. Please define it in your .env file.'
    );
}

export const API_ROUTES = {
    cart: new URL('/api/cart', BASE_URL),
    cartItem: (id: string) => new URL(`/api/cart/${id}`, BASE_URL),
    products: new URL('/api/products', BASE_URL),
    product: (id: string) => new URL(`/api/product/${id}`, BASE_URL),
} as const;

export const APP_ROUTES = {
    home: new URL('/', BASE_URL),
    cart: new URL('/cart', BASE_URL),
    product: (id: string) => new URL(`/product/${id}`, BASE_URL),
} as const;
