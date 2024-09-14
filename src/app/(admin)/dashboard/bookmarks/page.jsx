import { createClient } from '@/utils/supabase/server'
import AddBookmark from '../../_components/AddBookmark'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'

import { bookmarksTableHeader } from '@/mockdata/mockData'
import CustomDialog from '../../_components/CustomDialog'

const page = async() => {
    const supabase = createClient()
    const { data: bookmarks, error } = await supabase
        .from('bookmarks')
        .select('*')
        .order('id', {ascending: false})

    return (
        <ResourceCard
            title="Bookmarks"
            description="An archive of interesting links and updates "
            triggerContent={<AddBookmark />}>
            <CustomDialog triggerName={`Add bookmark`} children={<AddBookmark />} className="absolute top-6 right-5" />
            <ResourceTable headers={bookmarksTableHeader} data={bookmarks} />
        </ResourceCard>
    )
}


export default page
