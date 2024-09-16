'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import CustomMarkdown from '../CustomMarkdown'

const WorkForm = ({ initialData = {} }) => {
    const [caseStudy, setCaseStudy] = useState(initialData.case_study || '')

    useEffect(() => {
        const hiddenInput = document.getElementById('hidden-body')
        if (hiddenInput) {
            hiddenInput.value = caseStudy
        }
    }, [caseStudy])
    return (
        <>
            <div className="grid grid-cols-2 gap-3 rounded-lg">
                <div className="grid gap-2">
                    <Label htmlFor="name">Project name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter name..."
                        defaultValue={initialData.name || ''}
                        required
                        autoFocus
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Enter description..."
                        defaultValue={initialData.description || ''}
                        required
                        autoFocus
                    />
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor="github_url">Github url</Label>
                        <Input
                            id="github_url"
                            name="github_url"
                            type="text"
                            placeholder="Enter github url..."
                            defaultValue={initialData.github_url || ''}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="live_url">Live url</Label>
                        <Input
                            id="live_url"
                            name="live_url"
                            type="text"
                            placeholder="Enter live url..."
                            defaultValue={initialData.live_url || ''}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tech_stack">Tech stack</Label>
                        <Input
                            id="tech_stack"
                            name="tech_stack"
                            type="text"
                            placeholder="Separate with commas (reactjs, tailwind, vercel)..."
                            defaultValue={initialData.tech_stack || ''}
                            required
                            autoFocus
                        />
                    </div>
                </div>
                <div className="col-span-2 h-[240px]" data-color-mode="light">
                    <CustomMarkdown id="case_study" name="case_study" value={caseStudy} fnValue={setCaseStudy}/>
                    <Input type="hidden" id="hidden-body" name="case_study" value={caseStudy} />
                </div>
            </div>
        </>
    )
}

export default WorkForm
