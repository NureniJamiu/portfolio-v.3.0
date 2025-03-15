import Header from "@/components/custom/Header";

const layout = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto border border-1.5 border-neutral-800">
      <Header />
      {children}
      {/* <DockComponent /> */}
    </div>
  );
};

export default layout;
