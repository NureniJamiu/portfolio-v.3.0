'use client'

import Divider from '@/components/custom/Divider'
import MarkdownComponent from '@/components/custom/MarkdownComponent'
import PageTitle from '@/components/custom/PageTitle'
import Pagination from '@/components/custom/Pagination'
import { markdown } from '@/mockdata/mockData'
import { useState } from 'react'

const Page = () => {
    // const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(15)

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = markdown.slice(indexOfFirstItem, indexOfLastItem)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div className="pb-20">
            <PageTitle
                title="Bookmarks"
                description="Archive of interesting links."
            />
            <div>
                {currentItems.map((item, index) => (
                    <>
                        <div
                            key={index}
                            className="flex gap-5 text-[15px] py-5 text-[#2b2b2b] dark:text-[#dbdbdb]">
                            <div className="w-28 text-[#727272]">
                                {item.date}
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <div className="font-semibold">
                                    <MarkdownComponent>
                                        {item.title}
                                    </MarkdownComponent>
                                </div>
                                <div className="text-[#727272] text-[13px]">
                                    <MarkdownComponent>
                                        {item.url}
                                    </MarkdownComponent>
                                </div>
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
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={markdown.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default Page
