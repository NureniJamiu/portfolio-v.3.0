import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import CustomDialog from './CustomDialog'

const ResourceCard = ({
    title,
    description,
    triggerName = `Add ${title}`,
    triggerContent,
    children,
}) => {
    return (
        <Card>
            <CardHeader className="flex-row items-start justify-between">
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
                <CustomDialog triggerName={triggerName}>
                    {triggerContent}
                </CustomDialog>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    products
                </div>
            </CardFooter>
        </Card>
    )
}

export default ResourceCard
