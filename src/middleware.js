import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    try {
        // Create a Supabase client configured to use cookies
        const supabase = createMiddlewareClient({ req: request, res: NextResponse.next() })

        // Refresh session if expired - required for Server Components
        await supabase.auth.getSession()

        return NextResponse.next()
    } catch (e) {
        console.error('Middleware error:', e)
        // You might want to return a custom error response here
        return NextResponse.next()
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
