'use client';

import { ProductCardVariants } from '@/entities/product';

const variants = ['large', 'grid', 'list'];

const ViewProductsActions = ({
    currentVariant,
    onChangeVariant,
}: {
    currentVariant: ProductCardVariants;
    onChangeVariant: (variant: ProductCardVariants) => void;
}) => {
    const handleOnChangeVariant = (e: React.MouseEvent<HTMLDivElement>) => {
        const { name } = e.target as HTMLButtonElement;
        if (variants.includes(name))
            onChangeVariant(name as ProductCardVariants);
    };
    return (
        <div onClick={handleOnChangeVariant} className="flex gap-2">
            {variants.map((variant) => (
                <button
                    className={`${variant === currentVariant ? 'bg-red' : ''}bg-neutral-900 px-2 rounded text-white cursor-pointer`}
                    key={variant}
                    name={variant}
                >
                    {variant}
                </button>
            ))}
        </div>
    );
};

export default ViewProductsActions;
