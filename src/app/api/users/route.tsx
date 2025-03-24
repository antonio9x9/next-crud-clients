import { NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';

import pool from '../db';

export async function GET(req: Request) {
    // For example, fetch data from your DB here
    const result = await pool.query('SELECT * FROM public.users');

    const users = result.rows;
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;

    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };

    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}

// export function query(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get('query'); // e.g. `/api/search?query=hello`

//     return new Response(
//         JSON.stringify({ result: `You searched for: ${query}` }),
//         {
//             headers: { 'Content-Type': 'application/json' },
//         },
//     );
// }

// export async function GET(request: NextRequest) {
//     // 1. Using 'next/headers' helpers
//     const cookieStore = await cookies();
//     const token = cookieStore.get('token');

//     const headersList = await headers();
//     const referer = headersList.get('referer');

//     // 2. Using the standard Web APIs
//     const userAgent = request.headers.get('user-agent');

//     return new Response(JSON.stringify({ token, referer, userAgent }), {
//         headers: { 'Content-Type': 'application/json' },
//     });
// }

// export async function getById(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: string }> },
// ) {
//     const id = (await params).id;
//     // e.g. Query a database for user with ID `id`
//     return new Response(JSON.stringify({ id, name: `User ${id}` }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//     });
// }

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id = (await params).id;
    // e.g. Delete user with ID `id` in DB
    return new Response(null, { status: 204 });
}