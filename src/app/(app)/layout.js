import Header from "@/components/custom/Header";

const layout = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-neutral-800 mx-4">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
