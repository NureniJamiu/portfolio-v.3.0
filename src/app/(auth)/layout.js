import ThemeSwitcher from '@/components/custom/ThemeSwitcher'

export const metadata = {
    title: 'Portfolio',
}

const layout = ({ children }) => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f3f3f3] dark:bg-[#151515]">
            <div className="">{children}</div>
        </div>
    )
}

export default layout
