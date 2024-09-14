'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const CustomInput = ({ title, name, desc, value, setValue }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <Input
                        id={name}
                        name={name}
                        value={value}
                        className="dark:text-black"
                        placeholder={`Enter ${name}`}
                        onChange={e => setValue(e.target.value)}

                    />
                </form>
            </CardContent>
        </Card>
    )
}

export default CustomInput
