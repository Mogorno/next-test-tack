import { Product } from '@/entities/product';
import { FallbackImage } from '@/shared/ui';

type ProductCardProps = Product;

const fallbackImageUrl = '/images/404_buckethead.jpg';

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    price,
    image,
    category,
}) => {
    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6 mt-12">
            <div className="flex-shrink-0 w-full md:w-1/2 relative h-64 md:h-auto">
                <FallbackImage
                    src={image}
                    alt={title}
                    fallbackSrc={fallbackImageUrl}
                    fill
                    className="object-contain rounded"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-700 mb-6">{description}</p>
                    {category && (
                        <p className="text-sm text-gray-500 mb-4">
                            Категорія: {category}
                        </p>
                    )}
                </div>
                <div className="text-2xl font-semibold text-green-600">
                    ${price.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
