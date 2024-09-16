"use client"
import { useRef } from 'react'
import { addBookmark } from '../../dashboard/bookmarks/actions'
import SubmitButton from '../SubmitButton'
import ResumeForm from './ResumeForm'

const AddResume = () => {
    const formRef = useRef(null)

    const handleSubmit = async (formData) => {
        try {
            // CHANGE ADDBOOKMARK TO ADDRESUME
            const {success, message, error} = await addBookmark(formData)
            if (success) {
                console.log(message)
                formRef.current?.reset()
            } else {
                console.error(error)
            }
        } catch (error) {
            console.log("ERROR SUBMITTING RESUME", error)
        }
    }

    return (
        <form action={handleSubmit} ref={formRef}>
            <ResumeForm />
            <div className="flex justify-end w-full">
                <SubmitButton />
            </div>
        </form>
    )
}

export default AddResume
