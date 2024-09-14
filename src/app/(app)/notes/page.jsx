import Divider from '@/components/custom/Divider'
import MarkdownComponent from '@/components/custom/MarkdownComponent'
import PageTitle from '@/components/custom/PageTitle'
import { notes } from '@/mockdata/mockData'
import React from 'react'

const Page = () => {
    return (
        <div className="pb-20">
            <PageTitle
                title="Notes"
                description="Short-form thoughts and updates."
            />
            <div>
                {notes.map((item, index) => (
                    <>
                        <div
                            key={index}
                            className="flex gap-5 text-[15px] py-5 text-[#2b2b2b] dark:text-[#dbdbdb]">
                            <div className="w-28 text-[#727272]">
                                {item.date}
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <div className="mt-2">
                                    <MarkdownComponent>
                                        {item.body}
                                    </MarkdownComponent>
                                </div>
                            </div>
                        </div>
                        <Divider type="border-dashed" />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Page
