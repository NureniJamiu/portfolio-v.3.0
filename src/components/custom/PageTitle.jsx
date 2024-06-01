import { ArrowDownRight } from "lucide-react";
import Divider from "./Divider";

const PageTitle = ({ title, description }) => {
  return (
    <div className="mt-44">
      <div className="flex items-end gap-1">
        <h4 className="font-semibold text-[15px]">{title}</h4>
        <ArrowDownRight size={15} />
      </div>
      <p className="text-[14px] text-[#727272]">{description}</p>

      <div className="my-6">
        <Divider />
      </div>
    </div>
  );
};

export default PageTitle;
