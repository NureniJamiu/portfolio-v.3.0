import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";

const layout = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="border-x border-t border-neutral-800 mx-4">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
