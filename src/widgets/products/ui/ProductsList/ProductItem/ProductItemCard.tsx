'use client';

import { Product } from '@/entities/product/model';
import { APP_ROUTES } from '@/shared/config/routes';
import { FallbackImage } from '@/shared/ui/FallbackImage';
import Link from 'next/link';

type ProductItemCardProps = Product & React.ComponentProps<'div'>;

const fallbackImageUrl = '/images/404_buckethead.jpg';

const ProductItemCard: React.FC<ProductItemCardProps> = ({
    id,
    image = fallbackImageUrl,
    title,
    description,
    price,
}) => {
    return (
        <li className="border rounded p-4 shadow hover:shadow-md transition">
            <Link href={APP_ROUTES.product(id).href}>
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
            </Link>
        </li>
    );
};

export default ProductItemCard;
