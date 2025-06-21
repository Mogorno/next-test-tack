'use client';

import { FallbackImage } from '@/shared/ui';
import { ProductCardBaseProps } from '.';

const fallbackImageUrl = '/images/404_buckethead.jpg';

const GridItem: React.FC<ProductCardBaseProps> = ({ actions, ...product }) => {
    const { image = fallbackImageUrl, title, description, price } = product;
    return (
        <li className="border rounded p-4 shadow hover:shadow-md transition flex gap-4">
            <FallbackImage
                src={image}
                fallbackSrc={fallbackImageUrl}
                alt={title}
                className="w-1/2 h-full object-cover mb-2"
                width={300}
                height={300}
            />
            <div className="w-full overflow-hidden">
                <div className="flex items-center justify-between grow gap-2">
                    <h3 className="font-semibold overflow-ellipsis flex-1 min-w-0 overflow-hidden">
                        {title}
                    </h3>
                    <p className="font-bold shrink-0">${price}</p>
                </div>
                <p className="text-gray-600 text-sm">{description}</p>
                {actions && actions(product, 'grid')}
            </div>
        </li>
    );
};

export default GridItem;
