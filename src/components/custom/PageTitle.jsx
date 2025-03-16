import { ArrowDownRight } from "lucide-react";
import Divider from "./Divider";
import { cn } from "@/lib/utils";

const PageTitle = ({ title, description, titleClassName }) => {
  return (
    <>
      {/* `font-semibold text-[15px] ${titleClassName} ` */}
      <div className="mt-44 px-4">
        <div className="flex items-end gap-1">
          <h4 className={cn("text-2xl font-semibold", titleClassName)}>
            {title}
          </h4>
          <ArrowDownRight size={15} />
        </div>
        <p className="text-[14px] text-[#727272]">{description}</p>
      </div>
      <div className="my-6">
        <Divider />
      </div>
    </>
  );
};

export default PageTitle;
