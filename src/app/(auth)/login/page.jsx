'use client'

import ThemeSwitcher from '@/components/custom/ThemeSwitcher'
import InputError from '@/components/InputError'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { login, signup } from './actions'

const LoginForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const error = searchParams?.get('error')
    const message = searchParams?.get('message')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])

    return (
        <form action={login}>
            <Card className="rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center justify-between">
                        Welcome Admin
                        <ThemeSwitcher />
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <p className="mb-4 rounded text-center p-1 bg-red-100 text-red-500">
                            {error}
                        </p>
                    )}
                    {message && (
                        <p className="mb-4 rounded text-center p-1 bg-green-100 text-green-500">
                            {message}
                        </p>
                    )}
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email..."
                                value={email}
                                onChange={event =>
                                    setEmail(event.target.value)
                                }
                                required
                                autoFocus
                            />
                            <InputError
                                messages={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                                autoComplete="current-password"
                            />
                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <Button
                            formAction={login}
                            className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Button
                            variant="link"
                            className="underline"
                            formAction={signup}>
                            Sign up
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}

const Login = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    )
}

export default Login
