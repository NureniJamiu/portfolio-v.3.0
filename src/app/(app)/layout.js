import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import PatternBorders from "@/components/custom/PatternBorders";

const layout = ({ children }) => {
    return (
        <div className="">
            <Header />
            <div className="relative isolate max-w-[1400px] mx-auto">
                <PatternBorders />
                <div className="max-w-[1350px] mx-auto border-t border-neutral-800 md:px-10">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default layout;
