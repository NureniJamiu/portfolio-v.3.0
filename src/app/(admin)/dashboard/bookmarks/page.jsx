import AddBookmark from '../../_components/AddBookmark'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'

import { bookmarks, bookmarksTableHeader } from '@/mockdata/mockData'

const page = () => {
    return (
        <ResourceCard
            title="Bookmarks"
            description="An archive of interesting links and updates "
            triggerContent={<AddBookmark />}>
            <ResourceTable headers={bookmarksTableHeader} data={bookmarks} />
        </ResourceCard>
    )
}

export default page
