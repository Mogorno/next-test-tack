import { NextResponse } from 'next/server';
import { db } from '@/shared/lib';

export async function GET() {
    const products = await db.products.getAll();
    return NextResponse.json(products);
}
