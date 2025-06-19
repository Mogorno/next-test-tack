import { NextResponse } from 'next/server';
import db from '@/shared/lib/db';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    return NextResponse.json(await db.products.getById(id));
}
