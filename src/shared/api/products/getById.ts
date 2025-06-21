import { Product } from '@/entities/product/model';
import { API_ROUTES } from '@/shared/config/routes';

const getById = async (id: string): Promise<Product> => {
    const product = await fetch(API_ROUTES.product(id), {
        method: 'GET',
        next: { tags: [`product-${id}`] },
    });
    return product.json();
};

export default getById;
