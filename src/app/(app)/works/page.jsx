import Divider from "@/components/custom/Divider";
import MarkdownComponent from "@/components/custom/MarkdownComponent";
import PageTitle from "@/components/custom/PageTitle";
import ShowcaseCard from "@/components/custom/ShowcaseCard";
import { techStack } from "@/mockdata/mockData";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";


const showcaseProjects = [
    {
        title: "Marine Critical Parts Supply (MCPS)",
        imageSrc: "/images/mcps.png",
        videoSrc: "/videos/mcps.webm",
        description:
            "An easy-to-use platform that connects vessels & offshore operators with top equipment & part suppliers.",
        devTools: [
            "NextJS",
            "TypeScript",
            "TailwindCSS",
            "Tanstack query",
            "Framer motion",
            "Axios",
            "Vercel",
        ],
        liveUrl: "https://marinecriticalparts.com",
    },
    {
        title: "Ekopulse",
        imageSrc: "/images/ekopulse.png",
        videoSrc: "/videos/ekopulse.webm",
        description:
            "A comprehensive web application designed to help citizens of Lagos, Nigeria report environmental issues and enable authorities to track and respond to them efficiently.",
        devTools: [
            "TypeScript",
            "ReactJS",
            "TailwindCSS",
            "NodeJS",
            "Socket.io",
            "Leaflet",
            "Yup",
            "Mongoose",
            "Cloudinary",
            "Axios",
            "Clerk",
            "Vercel",
        ],
        liveUrl: "https://ekopulse.nurenijamiu.tech",
    },
    {
        title: "Screenforge",
        imageSrc: "/images/screenforge.png",
        videoSrc: "/videos/screenforge.webm",
        description:
            "A professional screen recording tool with built-in video editing and sophisticated sharing controls.",
        devTools: [
            "TypeScript",
            "ReactJS",
            "React router",
            "Zustand",
            "TailwindCSS",
            "NodeJS",
            "PrismaORM",
            "Postgresql",
            "Axios",
            "Ffmpeg",
            "Cloudinary",
            "Clerk",
            "Vercel",
        ],
        liveUrl: "https://screenforge.nurenijamiu.tech",
    },
    {
        title: "AmaLearn",
        imageSrc: "/images/amalearn.png",
        videoSrc: "/videos/amalearn.webm",
        description:
            "A comprehensive learning management system developed for the Association of Management Technology Students (AMATECH) at Lagos State University",
        devTools: [
            "NextJS",
            "TypeScript",
            "PDF parse",
            "Zod",
            "Zustand",
            "TailwindCSS",
            "PrismaORM",
            "NodeJS",
            "Langchain",
            "Postgresql",
            "PineconeDB",
            "Axios",
            "Cloudinary",
            "Clerk",
            "Vercel",
        ],
        liveUrl: "https://amalearn.nurenijamiu.tech",
    },
];

const Page = () => {
    return (
        <div>
            <PageTitle
                title="Works"
                description="A showcase of some of my projects."
            />
            <div className="grid md:grid-cols-2 gap-6 mt-10 border-y border-neutral-800">
                {showcaseProjects.map((project, idx) => (
                    <ShowcaseCard key={project.title + idx} {...project} />
                ))}
            </div>
            <div className="space-y-10 mt-10">
                <Project
                    name="Amatech Voting System"
                    liveUrl="amatech.nurenijamiu.tech"
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
