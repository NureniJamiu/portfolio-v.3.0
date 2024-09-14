import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const CustomDialog = ({ triggerName, children }) => {
    return (
        <Dialog size="xl" className="bg-green-600 w-full rounded-xl">
            <DialogTrigger>
                <span className="inline-block px-5 py-2 text-gray-300 bg-zinc-900 rounded-xl dark:text-zinc-900 dark:bg-gray-300">
                    {triggerName}
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-3xl bg-white dark:bg-black rounded-xl">
                <DialogHeader>
                    <DialogTitle>{triggerName}</DialogTitle>
                    <DialogDescription className="ml-2 text-gray-400 text-sm mb-3 mt-1">// Bookmark something new...</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default CustomDialog
