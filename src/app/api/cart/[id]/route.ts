import { NextResponse } from 'next/server';
import { db } from '@/shared/lib';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        if (!id) {
            return NextResponse.json({ error: 'Missing id' }, { status: 400 });
        }
        const cartItems = await db.cart.removeById(id);
        return NextResponse.json(cartItems);
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to remove item ${JSON.stringify(error)}` },
            { status: 500 }
        );
    }
}
