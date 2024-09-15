import Divider from "@/components/custom/Divider";
import MarkdownComponent from "@/components/custom/MarkdownComponent";
import PageTitle from "@/components/custom/PageTitle";
import { techStack } from "@/mockdata/mockData";
import { ExternalLink, GithubIcon } from "lucide-react";

const Page = () => {
  return <div>
    <PageTitle
        title="Works"
        description="A collection of my personal projects."
      />
      <Project />
  </div>;
};

export default Page;

const Project = () => {
    return (
        <>
            <div className="flex gap-4 text-[15px] py-5 text-[#2b2b2b] dark:text-[#dbdbdb]">
                <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center font-semibold gap-10 ">
                        <MarkdownComponent>
                            Project Firebase
                        </MarkdownComponent>
                        <div className="flex items-center gap-3">
                            <GithubIcon size={18}/>
                            <ExternalLink size={18}/>
                        </div>
                    </div>
                    <div className="text-[#727272] text-[13px]">
                        <MarkdownComponent>
                            google.com
                        </MarkdownComponent>
                    </div>
                    <div className="mt-2">
                        <MarkdownComponent>
                            This is a project I developed while working at Boughview innovations.
                        </MarkdownComponent>
                    </div>
                </div>

                <div className="w-40 mt-8">
                    <MarkdownComponent>
                        {techStack}
                    </MarkdownComponent>
                </div>
            </div>
            <Divider type="border-dashed" />
        </>
    )
}
