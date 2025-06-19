// src/shared/mock/products.ts

import { Product } from '@/entities/product/model/types';

const products: Product[] = [
    {
        id: '1',
        title: 'Phone',
        description: 'Smartphone with a great camera',
        price: 799,
        image: '/images/sport1.jpeg',
        category: 'Electronics',
    },
    {
        id: '2',
        title: 'Laptop',
        description: 'Laptop with a great battery',
        price: 899,
        image: '/images/sport2.jpeg',
        category: 'Electronics',
    },
    {
        id: '3',
        title: 'Tablet',
        description: 'Tablet with a great screen',
        price: 999,
        image: '/images/sport3.jpeg',
        category: 'Electronics',
    },
    {
        id: '4',
        title: 'Watch',
        description: 'Smartwatch with a great fitness',
        price: 599,
        image: '/images/anime1.jpeg',
        category: 'Electronics',
    },
    {
        id: '5',
        title: 'Headphones',
        description: 'Headphones with a great sound',
        price: 399,
        image: '/images/anime2.jpeg',
        category: 'Electronics',
    },
    {
        id: '6',
        title: 'Mouse',
        description: 'Mouse with a great buttons',
        price: 299,
        image: '/images/anime3.jpeg',
        category: 'Electronics',
    },
    {
        id: '7',
        title: 'Keyboard',
        description: 'Keyboard with a great keys',
        price: 199,
        image: '/images/anime4.jpeg',
        category: 'Electronics',
    },
    {
        id: '8',
        title: 'Microphone',
        description: 'Microphone with a great sound',
        price: 99,
        image: '/images/sport4.jpeg',
        category: 'Electronics',
    },
];

export default products;
