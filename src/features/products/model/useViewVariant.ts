import { ProductCardVariants } from '@/entities/product';
import { useState, useCallback } from 'react';

export function useViewVariant() {
    const [variant, setVariant] = useState<ProductCardVariants>('list');

    const changeVariant = useCallback((newVariant: ProductCardVariants) => {
        setVariant(newVariant);
    }, []);

    return { variant, changeVariant };
}
