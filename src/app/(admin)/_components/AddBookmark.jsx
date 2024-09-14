'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { addBookmark } from '../dashboard/bookmarks/actions'
import CustomMarkdown from './CustomMarkdown'

const AddBookmark = () => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        console.log(title, url, body)
    }
    return (
        <form action={addBookmark}>
            <h1 className="text-2xl ">Add Bookmark </h1>
            <p className="ml-4 text-gray-400 text-sm mb-3 mt-1">// Bookmark something new</p>

            <div className="grid grid-cols-2 gap-5 rounded-lg">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title..."
                        value={title}
                        onChange={e =>
                            setTitle(e.target.value)
                        }
                        required
                        autoFocus
                    />
                    {/* <InputError
                        messages={errors.email}
                        className="mt-2"
                    /> */}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="title">Link Url</Label>
                    <Input
                        id="url"
                        name="url"
                        type="text"
                        placeholder="Enter url..."
                        value={url}
                        onChange={e =>
                            setUrl(e.target.value)
                        }
                        required
                        autoFocus
                    />
                    {/* <InputError
                        messages={errors.email}
                        className="mt-2"
                    /> */}
                </div>
                <div className="col-span-2 h-[240px]" data-color-mode="light">
                    <CustomMarkdown value={body} fnValue={setBody} />
                </div>

                <div className="col-span-2">
                    <div className="w-64 mx-auto">
                        <Button className="w-full" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddBookmark
