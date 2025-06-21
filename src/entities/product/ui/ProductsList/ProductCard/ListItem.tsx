'use client';

import { FallbackImage } from '@/shared/ui';
import { ProductCardBaseProps } from '.';

const fallbackImageUrl = '/images/404_buckethead.jpg';

const ListItem: React.FC<ProductCardBaseProps> = ({ actions, ...product }) => {
    const { image = fallbackImageUrl, title, description, price } = product;
    return (
        <li className="border w-full rounded p-4 shadow hover:shadow-md transition flex items-center justify-between">
            <FallbackImage
                src={image}
                fallbackSrc={fallbackImageUrl}
                alt={title}
                className="w-16 h-16 object-cover mb-2"
                width={50}
                height={50}
            />
            <div>
                <h3 className="font-semibold text-2xl">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <p className="mt-2 font-bold">${price}</p>
            {actions && actions(product, 'list')}
        </li>
    );
};

export default ListItem;
