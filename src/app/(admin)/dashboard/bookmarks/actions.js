'use server'
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function addBookmark(formData) {
    const supabase = createClient()

    const dataInput = {
        title: formData.get('title'),
        url: formData.get('url'),
        body: formData.get('body'),
    }

    const { data, error } = await supabase
    .from('bookmarks')
    .insert([
        dataInput,
        ])
    .select()

    if(error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Bookmark created successfully." })
}
