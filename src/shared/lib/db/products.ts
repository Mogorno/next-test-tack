import products from '@/shared/mock/products';
import { Product } from '@/entities/product/model';

export const productsRepository = {
    async get(): Promise<Product[]> {
        return products;
    },

    async getById(id: string): Promise<Product | undefined> {
        return products.find((p) => p.id === id);
    },
};
