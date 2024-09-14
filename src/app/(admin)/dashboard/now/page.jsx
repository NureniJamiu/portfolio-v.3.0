import React from 'react'
import ResourceCard from '../../_components/ResourceCard'
import AddNote from '../../_components/AddNote'
import ResourceTable from '../../_components/ResourceTable'
import { bookmarks } from '@/mockdata/mockData'

const page = () => {
    return (
        <ResourceCard
            title="Now"
            description="What I am up to now"
            triggerName="Edit Now"
            triggerContent={<AddNote />}>
            <p>Formatted Now goes in here with an edit button</p>
        </ResourceCard>
    )
}

export default page
