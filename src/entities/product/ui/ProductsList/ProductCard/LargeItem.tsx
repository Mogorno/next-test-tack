'use client';

import { FallbackImage } from '@/shared/ui';
import { ProductCardBaseProps } from '.';

const fallbackImageUrl = '/images/404_buckethead.jpg';

const LargeItem: React.FC<ProductCardBaseProps> = ({ actions, ...product }) => {
    const { image = fallbackImageUrl, title, description, price } = product;
    return (
        <li className="border rounded p-4 shadow hover:shadow-md transition">
            <FallbackImage
                src={image}
                fallbackSrc={fallbackImageUrl}
                alt={title}
                className="w-full h-48 object-cover mb-2"
                width={300}
                height={300}
            />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="mt-2 font-bold">${price}</p>
            {actions && actions(product, 'large')}
        </li>
    );
};

export default LargeItem;
