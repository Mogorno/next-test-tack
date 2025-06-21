import { NextResponse } from 'next/server';
import { db } from '@/shared/lib';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    const product = await db.products.getById(id);
    return NextResponse.json(product);
}
