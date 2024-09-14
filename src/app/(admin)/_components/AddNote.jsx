'use client'

import Divider from '@/components/custom/Divider'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import CustomMarkdown from './CustomMarkdown'

const AddNote = () => {
    const [body, setBody] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        console.log(body)
    }
    return (
        <div className="gap-5 rounded-lg">
            <div className="mb-5">
                <h2 className="text-2xl font-semibold leading-none tracking-tight">
                    Add Note
                </h2>
                <span className="text-sm text-muted-foreground">
                    Make sure you format your notes nicely.
                </span>
            </div>
            <Divider border="border-b-gray-300" />
            <div className="mt-10 h-[240px]" data-color-mode="light">
                <CustomMarkdown value={body} fnValue={setBody} />
            </div>

            <div className="mt-5">
                <div className="w-64 mx-auto">
                    <Button className="w-full" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddNote
