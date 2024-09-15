"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { deleteBookmark } from '../dashboard/bookmarks/actions'

const DeleteBookmarkAlert = ({ bookmark }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    try {
      const { success, message, error } = await deleteBookmark(bookmark.id)
      if (success) {
        console.log(message)
        setOpen(false)
        // You might want to add some state update or refetch logic here
      } else {
        console.error(error)
      }
    } catch (error) {
      console.log("ERROR DELETING BOOKMARK", error)
    } finally {
        setLoading(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen} >
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="hover:text-red-500 m-0 p-0 bg-red-100 text-red-500 w-full hover:bg-red-200">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white rounded-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the bookmark
            &quot;{bookmark.title}&quot; from your database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className={cn(buttonVariants({variant: 'default'}), 'bg-red-200 text-red-500 hover:bg-red-300 hover:text-red-600')}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBookmarkAlert
