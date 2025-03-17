import Divider from "@/components/custom/Divider";
import MarkdownComponent from "@/components/custom/MarkdownComponent";
import PageTitle from "@/components/custom/PageTitle";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { certificates, techStack, workExperience } from "@/mockdata/mockData";

import BOUGHVIEW_LOGO from "@/assets/images/boughview.png";
import CHINGU_LOGO from "@/assets/images/chingu.png";

const Page = () => {
  return (
    <div>
      <PageTitle
        title="Resume"
        description="Web Developer who enjoys working at the intersection of design and engineering teams. Currently a part of the frontend team at Boughview Innovations."
      />
      <div>
        <h4 className="text-lg font-bold pt-4 px-4">Work Experience</h4>
        <div className="space-y-10">
          <ResumeCard
            name="Boughview Innovations"
            companyUrl="https://boughview.vercel.app"
            image={BOUGHVIEW_LOGO}
            duration={"May 2023 - Present"}
            experience={workExperience[0]}
            techStack={techStack[4]}
          />
          <ResumeCard
            name="Chingu Inc."
            companyUrl="https://chingu.io"
            image={CHINGU_LOGO}
            duration={"Jan 2023 - June 2023"}
            experience={workExperience[1]}
            techStack={techStack[0]}
          />
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-lg font-bold pt-4 px-4">Education</h4>
        <div className="space-y-2">
          <EducationCard
            name="BSC. Computer Science"
            graduationDate="In View: 2027"
            institute="International University of Applied Sciences"
          />
          <EducationCard
            name="BTech. Project Management Technology"
            graduationDate="In View: 2027"
            institute="Lagos State University"
          />
          <EducationCard
            name="Diploma in Software Engineering"
            graduationDate={"2022 - 2023"}
            institute={"ALX Africa"}
          />
          <EducationCard
            name="Fullstack Web Development"
            graduationDate={"2021 - 2022"}
            institute={"Lofty Inc, Digital Skills Academy"}
          />
          <EducationCard
            name="High School Certificate"
            graduationDate={"2009 - 2014"}
            institute={"Newtrend High School"}
          />
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-lg font-bold pt-4 px-4">Certificates</h4>
        <div className="grid md:grid-cols-2 gap-2">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="p-4 space-y-1  text-[#2b2b2b] dark:text-[#dbdbdb]"
            >
              <div className="flex items-baseline md:justify-between font-semibold gap-2">
                <span className="dark:text-neutral-300">
                  {certificate.title}
                </span>
              </div>
              <div className="text-[#727272] text-[13px]">
                <p>{certificate.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const ResumeCard = ({
  name,
  companyUrl,
  duration,
  experience,
  image,
  techStack,
}) => {
  return (
    <>
      <div className="md:flex gap-4 text-[15px] py-5 text-[#2b2b2b] dark:text-[#dbdbdb] px-4">
        {image && (
          <div>
            <div className="size-[40px] bg-neutral-400 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt="Boughview Logo"
                width={70}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-baseline md:justify-between font-semibold gap-2">
            <Link href={companyUrl} target="_blank" className="hover:underline">
              {name}
            </Link>
          </div>
          <div className="text-[#727272] text-[13px]">
            <p>{duration}</p>
          </div>
          {experience && (
            <div className="mt-3">
              <MarkdownComponent>{experience}</MarkdownComponent>
            </div>
          )}
        </div>

        {techStack && (
          <>
            <p className="mt-8 md:hidden">{techStack}</p>

            <div className="hidden md:flex w-40 mt-8">
              <MarkdownComponent>{techStack}</MarkdownComponent>
            </div>
          </>
        )}
      </div>
      <Divider type="border-dashed" />
    </>
  );
};

const EducationCard = ({ name, graduationDate, institute }) => {
  return (
    <div className="space-y-2 text-[15px]  text-[#2b2b2b] dark:text-[#dbdbdb]">
      <div className="p-4 space-y-1">
        <div className="flex items-baseline md:justify-between font-semibold gap-2">
          <span className="dark:text-neutral-300">{name}</span>
          <span className="text-[13px] font-normal italic">
            {graduationDate}
          </span>
        </div>
        <div className="text-[#727272] text-[13px]">
          <p>{institute}</p>
        </div>
      </div>
      <Divider type="border-dashed" />
    </div>
  );
};
