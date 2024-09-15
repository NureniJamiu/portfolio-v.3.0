'use client'

import { Input } from '@/components/ui/input'
import { projectSchema } from '@/lib/yup_validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomMarkdown from './CustomMarkdown'

const AddProject = () => {
    const [caseStudy, setCaseStudy] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(projectSchema),
    })

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <h1 className="text-2xl font-semibold">Add New Project</h1>
            <form
                className="grid grid-cols-2 gap-5 rounded-lg"
                onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <Input
                            className="dark:text-black"
                            placeholder="Title"
                            {...register('title')}
                        />
                        <span className="text-red-500 text-sm ml-2">
                            {errors.title?.message}
                        </span>
                    </div>
                    <div>
                        <Input
                            className="dark:text-black"
                            placeholder="Description"
                            {...register('description')}
                        />
                        <span className="text-red-500 text-sm ml-2">
                            {errors.description?.message}
                        </span>
                    </div>
                    <div>
                        <Input
                            className="dark:text-black"
                            placeholder="Live url"
                            {...register('live_url')}
                        />
                        <span className="text-red-500 text-sm ml-2">
                            {errors.live_url?.message}
                        </span>
                    </div>
                </div>
                <div>
                    <div>
                        <Input
                            className="dark:text-black"
                            placeholder="Tech stack: separate by comma (,)"
                            {...register('tech_stack')}
                        />
                        <span className="text-red-500 text-sm ml-2">
                            {errors.tech_stack?.message}
                        </span>
                    </div>
                    <div>
                        <Input
                            className="text-gray-300 dark:text-black"
                            id="picture"
                            type="file"
                            {...register}
                        />
                        <span className="text-red-500 text-sm ml-2">
                            {errors.image?.message}
                        </span>
                    </div>
                    <div>
                        <Input
                            className="dark:text-black"
                            placeholder="Github url"
                            {...register('github_url')}
                        />
                        <span className="text-red-500 text-sm ml-2">
                            {errors.github_url?.message}
                        </span>
                    </div>
                </div>
                <div className="col-span-2 h-[240px]" data-color-mode="light">
                    <CustomMarkdown
                        value={caseStudy}
                        fnValue={setCaseStudy}
                        placeholder="Case study goes here..."
                    />
                </div>
                {/* <Input className="dark:text-black" type="submit" value="Submit" /> */}
            </form>
        </>
    )
}

export default AddProject
