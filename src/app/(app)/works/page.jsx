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
          liveUrl="mcps.xxko.vercel.app"
          githubUrl="https://github.com/NureniJamiu/mcps"
          description="MCPS is a platform that connects Vessels and Offshore Operators with Top Equipments and Parts Suppliers"
          techStack={techStack[0]}
        />
        <Project
          name="Amatech LASU"
          liveUrl="amatech-lasu.netlify.app"
          githubUrl="https://github.com/NureniJamiu/amatech-lasu"
          description="As the President of the **Association of Project Management Technology** Students in Lagos State University, I designed and developed the first department website which serves a central hub for any information regarding the department."
          techStack={techStack[1]}
        />
        <Project
          name="Port Scanner"
          githubUrl="https://github.com/NureniJamiu/port-scanner"
          description="A full-stack port scanning application built with Python Flask (backend) and React (frontend), demonstrating cybersecurity and software engineering skills."
          techStack={techStack[2]}
        />
        <Project
          name="PM Ignite"
          liveUrl="pmignite.vercel.app"
          githubUrl="https://github.com/NureniJamiu/pmignite"
          description="Connecting companies in need of project management services with dedicated project managers."
          techStack={techStack[3]}
        />
        <Project
          name="PLEYDA Website (NGO)"
          liveUrl="pleyda.vercel.app"
          githubUrl="https://github.com/NureniJamiu/pleyda"
          description="Designed and developed a website for the **Purposeful Leadership for Empowerment & Youth Development Association** (PLEYDA), an NGO on a mission to cultivate conscientious youths and equip them with essential and diverse skill sets that foster holistic development."
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
