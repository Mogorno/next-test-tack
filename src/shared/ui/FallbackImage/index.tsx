'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type FallbackImageProps = Omit<ImageProps, 'src'> & {
    src: string;
    fallbackSrc: string;
};

const FallbackImage = ({
    src,
    fallbackSrc,
    alt,
    ...props
}: FallbackImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
};

export default FallbackImage;
