import AddNote from '../../_components/AddNote'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'

import { bookmarks, bookmarksTableHeader } from '@/mockdata/mockData'

const page = () => {
    return (
        <ResourceCard
            title="Notes"
            description="Short-form thoughts and updates."
            triggerContent={<AddNote />}>
            <ResourceTable headers={bookmarksTableHeader} data={bookmarks} />
        </ResourceCard>
    )
}

export default page
