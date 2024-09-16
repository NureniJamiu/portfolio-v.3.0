import { projects, projectsTableHeader } from '@/mockdata/mockData'
import { createClient } from '@/utils/supabase/server'
import AddProject from '../../_components/AddProject'
import CustomDialog from '../../_components/CustomDialog'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'
import AddWork from '../../_components/works/AddWork'

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
            title="Works"
            description="A collection of my personal projects."
            triggerContent={<AddProject />}
        >
            <CustomDialog triggerName="Add work" className="absolute top-6 right-5">
                <AddWork />
            </CustomDialog>
            <ResourceTable headers={projectsTableHeader} data={projects} rowType="work"/>
        </ResourceCard>
    )
}

export default Page
