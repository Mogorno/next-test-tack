import { Product } from '@/entities/product/model';

export type CartItem = {
    id: string;
    quantity: number;
    productId: string;
};

export type CartPopulatedItem = {
    id: string;
    quantity: number;
    product: Product;
};
