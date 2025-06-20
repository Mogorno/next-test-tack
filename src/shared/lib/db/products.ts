import { Product } from '@/entities/product/model';
import mock from '@/shared/mock';

export const productsRepository = {
    async get(): Promise<Product[]> {
        return mock.products;
    },

    async getById(id: string): Promise<Product | undefined> {
        return mock.products.find((p) => p.id === id);
    },
};
