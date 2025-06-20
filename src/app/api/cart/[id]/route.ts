import { NextResponse } from 'next/server';
import db from '@/shared/lib/db';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        if (!id) {
            return NextResponse.json({ error: 'Missing id' }, { status: 400 });
        }
        const cartItems = await db.cartItems.remove(id);
        return NextResponse.json(cartItems);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Failed to remove item' },
            { status: 500 }
        );
    }
}
