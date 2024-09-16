import { resumes, resumeTableHeader } from '@/mockdata/mockData'
import { createClient } from '@/utils/supabase/server'
import CustomDialog from '../../_components/CustomDialog'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'
import AddResume from '../../_components/resume/AddResume'

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
            title="Resume"
            description="Web developer at Boughview Innovations."
            triggerContent={<AddResume />}
        >
            <CustomDialog triggerName="Add resume" className="absolute top-6 right-5">
                <AddResume />
            </CustomDialog>
            <ResourceTable headers={resumeTableHeader} data={resumes} rowType="resume"/>
        </ResourceCard>
    )
}

export default Page
