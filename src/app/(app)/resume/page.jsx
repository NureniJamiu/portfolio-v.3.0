import PageTitle from "@/components/custom/PageTitle";
import React from "react";

const Page = () => {
  return (
    <div>
      <PageTitle
        title="Resume"
        description="Web Developer who enjoys working at the intersection of design and engineering teams. Currently a part of the frontend team at Boughview Innovations."
      />
      <div className="space-y-10">
        <ResumeCard
          name="Boughview Innovations"
          liveUrl="boughview.com"
          githubUrl=""
          description="Frontend Developer"
          techStack="React, Next.js, TailwindCSS, Figma"
        />
      </div>
    </div>
  );
};

export default Page;

const ResumeCard = ({ name, liveUrl, githubUrl, description, techStack }) => {
  return (
    <>
      <div className="md:flex gap-4 text-[15px] py-5 text-[#2b2b2b] dark:text-[#dbdbdb] px-4">
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center font-semibold gap-10">
            <MarkdownComponent>{name}</MarkdownComponent>
            <div className="flex items-center gap-3">
              {githubUrl && (
                <Link href={githubUrl} target="_blank">
                  <GitBranch size={18} />
                </Link>
              )}
              {liveUrl && (
                <Link href={"https://" + liveUrl} target="_blank">
                  <ExternalLink size={18} />
                </Link>
              )}
            </div>
          </div>
          <div className="text-[#727272] text-[13px]">
            <MarkdownComponent>{liveUrl}</MarkdownComponent>
          </div>
          <div className="mt-2">
            <MarkdownComponent>{description}</MarkdownComponent>
          </div>
        </div>

        <p className="mt-8 md:hidden">{techStack}</p>

        <div className="hidden md:flex w-40 mt-8">
          <MarkdownComponent>{techStack}</MarkdownComponent>
        </div>
      </div>
      <Divider type="border-dashed" />
    </>
  );
};
