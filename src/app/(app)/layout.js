import Header from "@/components/custom/Header";

const layout = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-1.5 border-neutral-800 mx-4">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
