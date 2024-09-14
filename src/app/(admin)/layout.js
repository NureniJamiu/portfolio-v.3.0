import {
    BookCopy,
    Bookmark,
    Briefcase,
    CircleUser,
    File,
    Home,
    Menu,
    Notebook,
    Package2,
    Search,
} from 'lucide-react'
import Link from 'next/link'

import ThemeSwitcher from '@/components/custom/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { createClient } from '@/utils/supabase/server'

const DashboardLayout = async ({ children }) => {
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    console.log('USER', user)
    // const { logout } = useAuth()
    // const { user } = useAuth({ middleware: 'auth' })

    // const router = useRouter()

    // if (!user) {
    //     return router.push('/')
    // }

    return (
        <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 font-semibold">
                            <span className="">N.J.O</span>
                        </Link>

                        <ThemeSwitcher />
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                                <Home className="h-4 w-4" />
                                Dashboard
                            </Link>

                            <Link
                                href="/dashboard/notes"
                                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
                                <Notebook className="h-4 w-4" />
                                Notes{' '}
                            </Link>
                            <Link
                                href="/dashboard/works"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                                <Briefcase className="h-4 w-4" />
                                Works
                            </Link>
                            <Link
                                href="/dashboard/now"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                                <BookCopy className="h-4 w-4" />
                                Now
                            </Link>
                            <Link
                                href="/dashboard/resume"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                                <File className="h-4 w-4" />
                                Resume
                            </Link>
                            <Link
                                href="/dashboard/bookmarks"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                                <Bookmark className="h-4 w-4" />
                                Bookmarks
                                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge> */}
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Get started here</CardTitle>
                                <CardDescription>
                                    Begin by sharing your thoughts and ideas
                                    with your audience.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full rounded-xl">
                                    Add Note
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen flex-col overflow-hidden">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold">
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="/dashboard/notes"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Notebook className="h-5 w-5" />
                                    Notes
                                </Link>
                                <Link
                                    href="/dashboard/works"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Briefcase className="h-5 w-5" />
                                    Works
                                </Link>
                                <Link
                                    href="/dashboard/now"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <BookCopy className="h-5 w-5" />
                                    Now
                                </Link>
                                <Link
                                    href="/dashboard/resume"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <File className="h-5 w-5" />
                                    Resume
                                </Link>
                                <Link
                                    href="/dashboard/bookmark"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                                    <Bookmark className="h-5 w-5" />
                                    Bookmarks
                                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge> */}
                                </Link>
                            </nav>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get
                                            unlimited access to our support
                                            team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search site..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-1">
                                <span>{user?.email}</span>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle user menu
                                    </span>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem> */}
                            <form action="/auth/signout" method="post">
                                <Button variant="link">Logout</Button>
                            </form>
                            {/* </DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>

                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 shadow h-[calc(100vh-56px)] overflow-y-scroll">
                    <div className=" overflow-scroll rounded-lg">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
export default DashboardLayout

// 'use client'

// import { useAuth } from '@/hooks/auth'
// import Navigation from '@/app/(admin)/Navigation'
// import Loading from '@/app/(admin)/Loading'

// const AppLayout = ({ children }) => {
//     const { user } = useAuth({ middleware: 'auth' })

//     if (!user) {
//         return <Loading />
//     }

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <Navigation user={user} />

//             <main>{children}</main>
//         </div>
//     )
// }

// export default AppLayout
