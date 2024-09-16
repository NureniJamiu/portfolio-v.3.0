'use client'
import ExperienceForm from './ExperienceForm'

const ResumeForm = ({ initialData = {} }) => {
    // const [caseStudy, setCaseStudy] = useState(initialData.case_study || '')
    return (
        <>
           <ExperienceForm initialData={intialData}/>
           {/* ADD TESTIMONIAL FORM  */}
        </>
    )
}

export default ResumeForm
