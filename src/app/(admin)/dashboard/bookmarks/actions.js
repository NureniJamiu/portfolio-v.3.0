'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addBookmark(formData) {
    const supabase = createClient()
    const dataInput = {
        title: formData.get('title'),
        url: formData.get('url'),
        body: formData.get('body'),
    }

    try {
        const { data, error } = await supabase
            .from('bookmarks')
            .insert([dataInput])
            .select()

        if (error) {
            throw new Error(error.message)
        }

        // Revalidate the paths
        revalidatePath('/dashboard/bookmarks')
        revalidatePath('/bookmarks')

        return { success: true, message: "Bookmark created successfully.", data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}
