import Divider from "@/components/custom/Divider";
import MarkdownComponent from "@/components/custom/MarkdownComponent";
import PageTitle from "@/components/custom/PageTitle";
import { techStack } from "@/mockdata/mockData";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
      <div>
          <PageTitle
              title="Works"
              description="A collection of my personal & client projects."
          />
          <div className="space-y-10">
              <Project
                  name="Marine Critical Parts Supply (MCPS)"
                  liveUrl="marinecriticalparts.com"
                  githubUrl="https://github.com/NureniJamiu/mcps"
                  description="MCPS is a platform that connects Vessels and Offshore Operators with Top Equipments and Parts Suppliers"
                  techStack={techStack[0]}
              />
              <Project
                  name="Screenforge"
                  liveUrl="screenforge.nurenijamiu.tech"
                  githubUrl="https://github.com/NureniJamiu/screenforge"
                  description="A comprehensive screen recording tool with built-in video editing and sophisticated sharing controls."
                  techStack={techStack[1]}
              />
              <Project
                  name="Ekopulse"
                  liveUrl="ekopulse.nurenijamiu.tech"
                  githubUrl="https://github.com/NureniJamiu/ekopulse"
                  description="EkoPulse is a comprehensive web application designed to help citizens of Lagos, Nigeria report environmental issues and enable authorities to track and respond to them efficiently. The platform features real-time updates, interactive mapping, and role-based access control."
                  techStack={techStack[2]}
              />
              <Project
                  name="Amalearn"
                  liveUrl="amatech.nurenijamiu.tech"
                  githubUrl="https://github.com/NureniJamiu/amatech-learning-hub"
                  description="A comprehensive learning management system developed for the Association of Management Technology Students (AMATECH) at Lagos State University"
                  techStack={techStack[3]}
              />
              <Project
                  name="Amatech Voting System"
                  // liveUrl="amatech.nurenijamiu.tech"
                  githubUrl="https://github.com/NureniJamiu/amatech-voting-system"
                  description="An online voting web application for the department of Management Technology, Lagos State University (LASU)."
                  techStack={techStack[0]}
              />
          </div>
      </div>
  );
};

export default Page;

const Project = ({ name, liveUrl, githubUrl, description, techStack }) => {
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
