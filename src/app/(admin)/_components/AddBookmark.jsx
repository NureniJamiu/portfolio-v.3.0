"use client"
import { useRef } from 'react'
import { addBookmark } from '../dashboard/bookmarks/actions'
import BookmarkForm from './BookmarkForm'
import SubmitButton from './SubmitButton'

const AddBookmark = () => {
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
            <BookmarkForm />
            <div className="w-64 mx-auto my-2">
                <SubmitButton />
            </div>
        </form>
    )
}

export default AddBookmark
