"use client"

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button className="flex item-center justify-center mt-4 w-32" type="submit" disabled={pending}>
            {pending ? 'Adding...' : 'Add bookmark'}
        </Button>
    )
}

export default SubmitButton
