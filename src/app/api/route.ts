import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        console.log(req)
        return NextResponse.json({ message: "profile" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        console.log(req)
        return NextResponse.json({ message: "profile" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function OPTIONS(req: any) {
    return new Response(null, { status: 204 });
}