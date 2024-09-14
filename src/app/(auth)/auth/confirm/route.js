import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    const next = '/dashboard'

    // Create redirect link without the secret token
    const redirectTo = request.nextUrl.clone()
    redirectTo.pathname = next
    redirectTo.searchParams.delete('token_hash')
    redirectTo.searchParams.delete('type')

    if (token_hash && type) {
        const supabase = createClient()

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })
        if (!error) {
            redirectTo.searchParams.delete('next')
            return NextResponse.redirect(redirectTo)
        }
    }

    // return the user to an error page with some instructions
    redirectTo.pathname = '/login?error=An error occurred. Please try again.'
    return NextResponse.redirect(redirectTo)
}
