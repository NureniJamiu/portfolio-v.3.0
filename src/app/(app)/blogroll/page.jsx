import Divider from '@/components/custom/Divider'
import MarkdownComponent from '@/components/custom/MarkdownComponent'
import PageTitle from '@/components/custom/PageTitle'
import { designResources } from '@/mockdata/mockData'
import React from 'react'

const Page = () => {
    return (
        <div className="pb-20">
            <PageTitle title="Blogroll" description="Blogs I enjoy reading." />
            <div>
                <div className="text-[15px] pb-1 text-[#2b2b2b] dark:text-[#dbdbdb]">
                    <div>
                        <MarkdownComponent>{designResources}</MarkdownComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
