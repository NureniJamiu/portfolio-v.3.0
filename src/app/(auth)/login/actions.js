'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/login?error=Invalid credentials, please try again')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(formData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/login?error=An error occured signing in, please try again.')
    }

    revalidatePath('/', 'layout')
    redirect(
        '/login?message=Signup successful. Please check your email to validate signup.',
    )
}
