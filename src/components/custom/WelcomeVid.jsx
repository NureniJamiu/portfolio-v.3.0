import ShineBorder from "@/components/magicui/shine-border";
import { Skeleton } from "../ui/skeleton";
import { Video } from "lucide-react";

const WelcomeVid = () => {
  return (
    <ShineBorder className="h-96 w-full bg-[#B8B8B8] text-center text-2xl font-bold capitalize border-red-900 dark:border-white">
      <div className="flex items-center justify-center ">
        <Video size={85} className="text-[#727272]" />
      </div>
    </ShineBorder>
  );
};

export default WelcomeVid;
