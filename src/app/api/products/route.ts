import { NextResponse } from 'next/server';
import db from '@/shared/lib/db';

export async function GET() {
    return NextResponse.json(await db.products.get());
}
