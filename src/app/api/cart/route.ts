import { NextResponse } from 'next/server';
import { db } from '@/shared/lib';

export async function GET() {
    return NextResponse.json(await db.cart.getAll());
}

export async function POST(request: Request) {
    const body = await request.json();
    const { productId, quantity } = body;

    if (!productId || !quantity)
        return NextResponse.json(
            { error: 'Missing productId or quantity' },
            { status: 400 }
        );
    try {
        await db.cart.addById(productId, quantity);
        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to remove item ${JSON.stringify(error)}` },
            { status: 500 }
        );
    }
}
