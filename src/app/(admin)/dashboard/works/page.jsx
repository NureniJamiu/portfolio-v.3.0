import AddProject from '../../_components/AddProject'
import ResourceCard from '../../_components/ResourceCard'
import ResourceTable from '../../_components/ResourceTable'

import { projects, projectsTableHeader } from '@/mockdata/mockData'

const page = () => {
    return (
        <ResourceCard
            title="Works"
            description="A collection of some personal and client projects"
            triggerContent={<AddProject />}>
            <ResourceTable headers={projectsTableHeader} data={projects} />
        </ResourceCard>
    )
}

export default page
