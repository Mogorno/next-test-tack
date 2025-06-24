import { NextResponse } from 'next/server';
import { db } from '@/shared/lib';
import { CartPopulatedItem } from '@/entities';

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

type UpdateCartItem = {
    id: string;
} & Partial<Omit<CartPopulatedItem, 'id'>>;

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const [id, req] = await Promise.all([params, request]);
        const updatedFields = await req.json();
        const cartItem = { ...id, ...updatedFields } as UpdateCartItem;

        if (!id) {
            return NextResponse.json({ error: 'Missing id' }, { status: 400 });
        }
        await db.cart.updateOne(cartItem);
        return NextResponse.json({
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to remove item ${JSON.stringify(error)}` },
            { status: 500 }
        );
    }
}
