import AreachartInteractive from '../_charts/AreachartInteractive'
import Barchart from '../_charts/Barchart'
import Linechart from '../_charts/Linechart'
import Linefillchart from '../_charts/Linefillchart'

export const metadata = {
    title: 'Nureni Jamiu - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2 rounded-xl  p-2">
                <Linechart />
                <Linefillchart />
                <Barchart />
                <div className="col-span-3">
                    <AreachartInteractive />
                </div>
                {/* <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        You have no products
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can start selling as soon as you add a product.
                    </p>
                    <Button className="mt-4">Add Product</Button>
                </div> */}
            </div>
        </>
    )
}

export default Dashboard
