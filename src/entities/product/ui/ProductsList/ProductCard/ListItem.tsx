'use client';

import { Product } from '@/entities/product/model';
import { APP_ROUTES } from '@/shared/config/routes';
import { FallbackImage } from '@/shared/ui/FallbackImage';
import Link from 'next/link';

type ListItemProps = Product & React.ComponentProps<'div'>;

const fallbackImageUrl = '/images/404_buckethead.jpg';

const ListItem = ({
    image = fallbackImageUrl,
    title,
    description,
    price,
    id,
}: ListItemProps) => {
    return (
        <li className="border w-full rounded p-4 shadow hover:shadow-md transition">
            <Link
                href={APP_ROUTES.product(id).href}
                className="flex items-center justify-between gap-2 w-full "
            >
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
            </Link>
        </li>
    );
};

export default ListItem;
