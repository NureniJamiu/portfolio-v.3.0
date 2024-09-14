import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const ResourceCard = ({
    title,
    description,
    triggerName = `Add ${title}`,
    triggerContent,
    children,
}) => {
    return (
        <Card className="relative">
            {/* <CustomDialog triggerName={triggerName} children={triggerContent} /> */}
            <CardHeader className="flex-row items-start justify-between">
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
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
