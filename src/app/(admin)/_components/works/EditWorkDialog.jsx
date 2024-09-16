"use client"

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { updateBookmark } from '../../dashboard/bookmarks/actions'
import WorkForm from './WorkForm'

const EditWorkDialog = ({ work }) => {
  const [open, setOpen] = useState(false)

  const handleSubmit = async (formData) => {
    try {
        // CHANGE UPDATEBOOKMARK TO UPDATEWORK
      const { success, message, error } = await updateBookmark(work.id, formData)
      if (success) {
        console.log(message)
        setOpen(false)
        // You might want to add some state update or refetch logic here
      } else {
        console.error(error)
      }
    } catch (error) {
      console.log("ERROR UPDATING PROJECT", error)
    }
  }

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen)
  }

  const handleEditClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(true)
  }

  return (
    <Dialog size="xl" className="w-full" open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={handleEditClick} className="w-full px-0 py-2 h-3 justify-start items-center hover:text-green-500">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-3xl bg-white dark:bg-black rounded-xl" onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>Edit Work</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit}>
          <WorkForm initialData={work} />
          <div className="flex justify-end mt-4">
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditWorkDialog
