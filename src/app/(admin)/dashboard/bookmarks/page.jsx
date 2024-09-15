import { bookmarksTableHeader } from '@/mockdata/mockData'
import { createClient } from '@/utils/supabase/server'
import AddBookmark from '../../_components/AddBookmark'
import CustomDialog from '../../_components/CustomDialog'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'

const Page = async () => {
    const supabase = createClient()
    const { data: bookmarks, error } = await supabase
        .from('bookmarks')
        .select('*')
        .order('id', { ascending: false })

    if (error) {
        console.error('Error fetching bookmarks:', error)
        // You might want to handle this error more gracefully
    }

    return (
        <ResourceCard
            title="Bookmarks"
            description="An archive of interesting links and updates"
            triggerContent={<AddBookmark />}
        >
            <CustomDialog triggerName="Add bookmark" className="absolute top-6 right-5">
                <AddBookmark />
            </CustomDialog>
            <ResourceTable headers={bookmarksTableHeader} data={bookmarks} />
        </ResourceCard>
    )
}

export default Page
