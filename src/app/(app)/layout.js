
import Header from '@/components/custom/Header'

const layout = ({ children }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 ">
            <Header />
            {children}
            {/* <DockComponent /> */}
        </div>
    )
}

export default layout
