import { Product } from '@/entities/product/model';
import { API_ROUTES } from '@/shared/config/routes';

const getProductById = async (id: string): Promise<Product> => {
    console.log(API_ROUTES.product(id));
    const product = await fetch(API_ROUTES.product(id));
    return product.json();
};

export default getProductById;
