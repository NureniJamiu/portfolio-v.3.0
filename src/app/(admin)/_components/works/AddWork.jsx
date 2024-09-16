"use client"
import { useRef } from 'react'
import { addBookmark } from '../../dashboard/bookmarks/actions'
import SubmitButton from '../SubmitButton'
import WorkForm from './WorkForm'

const AddWork = () => {
    const formRef = useRef(null)

    const handleSubmit = async (formData) => {
        try {
            const {success, message, error} = await addBookmark(formData)
            if (success) {
                console.log(message)
                formRef.current?.reset()
            } else {
                console.error(error)
            }
        } catch (error) {
            console.log("ERROR SUBMITTING FORM", error)
        }
    }

    return (
        <form action={handleSubmit} ref={formRef}>
            <WorkForm />
            <div className="flex justify-end w-full">
                <SubmitButton />
            </div>
        </form>
    )
}

export default AddWork
