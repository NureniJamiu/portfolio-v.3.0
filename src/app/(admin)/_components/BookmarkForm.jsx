'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import CustomMarkdown from './CustomMarkdown'

const BookmarkForm = () => {
    const [body, setBody] = useState('')

    // Update hidden input when body changes
    useEffect(() => {
        const hiddenInput = document.getElementById('hidden-body')
        if (hiddenInput) {
            hiddenInput.value = body
        }
    }, [body])
    return (
        <>
            <div className="grid grid-cols-2 gap-5 rounded-lg">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title..."
                        required
                        autoFocus
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="title">Link Url</Label>
                    <Input
                        id="url"
                        name="url"
                        type="text"
                        placeholder="Enter url..."
                        required
                        autoFocus
                    />
                </div>
                <div className="col-span-2 h-[240px]" data-color-mode="light">
                    <CustomMarkdown id="body" name="body" value={body} fnValue={setBody}/>
                    <Input type="hidden" id="hidden-body" name="body" value={body} />
                </div>
            </div>
        </>
    )
}

export default BookmarkForm
