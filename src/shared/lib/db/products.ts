import { Product } from '@/entities/product/model';
import mock from '@/shared/mock';

const products = {
    async getAll(): Promise<Product[]> {
        return mock.products;
    },

    async getById(id: string): Promise<Product | undefined> {
        return mock.products.find((p) => p.id === id);
    },
};

export default products;
