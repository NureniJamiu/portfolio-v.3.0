import Divider from "@/components/custom/Divider";
import PageTitle from "@/components/custom/PageTitle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="pb-24">
        <PageTitle
          title="Hello👋"
          description="Welcome to my corner of the Internet."
          titleClassName="text-4xl"
        />

        <div className="my-5 px-4 text-[15px] dark:text-neutral-300">
          {/* <WelcomeVid /> */}
          <div className="mt-2 space-y-4">
            <p>
              My name is Nureni Jamiu Olawale. I am a Frontend Developer who
              loves building things and helping people. I am currently pursuing
              a <b>double degree</b> in{" "}
              <span className="font-bold underline">Computer Science</span> at{" "}
              <span className="font-bold underline">
                International University of Applied Sciences
              </span>
              , Germany , and in{" "}
              <span className="font-bold underline">Project Management</span> at{" "}
              <span className="font-bold underline">
                Lagos State University
              </span>
              , Nigeria.
            </p>

            <p>
              That&apos;s me in 10 seconds. If that peaked your interest and
              would like to know more, then{" "}
              <span className="bg-[#B8B8B8] dark:bg-[#2B2B2B] underline">
                <Link href="/about">click here</Link>
              </span>
              {" or "}
              <span className="bg-[#B8B8B8] dark:bg-[#2B2B2B] underline">
                <Link
                  href="https://youtu.be/XAOuIy2YBZk?si=ZY9_z3pVw9mJnA1Z"
                  className="underline"
                  target="_blank"
                >
                  watch a short video
                </Link>
              </span>{" "}
              about me instead.
            </p>
          </div>
        </div>
        <Divider />

        <div className="mt-10 text-[15px]">
          <div className="flex items-center px-4">
            <span className="w-36 text-[#727272]">Name</span>
            <span className="flex-1 font-[300]">Nureni O. Jamiu</span>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">Location</span>
            <span className="flex-1 font-[300]">Lagos, Nigeria</span>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">Colophon</span>
            <span className="flex-1 font-[300]">
              Nextjs, TailwindCSS, Inter
            </span>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">Carbon footprint</span>
            <span className="flex-1 font-[300] ">
              <code className="bg-[#B8B8B8] dark:bg-[#2B2B2B] px-1 rounded group cursor-pointer">
                <span className="border-b-[1.5px]  border-b-[#2B2B2B] dark:border-b-[#727272] group-hover:border-b-[#673de6]">
                  0.09 g of CO<sup>2</sup>
                </span>
              </code>
            </span>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">Version</span>
            <span className="flex-1 font-[300]">
              <code className="bg-[#B8B8B8] dark:bg-[#2B2B2B] px-1 rounded">
                <span className="">3.0.0-alpha</span>
              </code>
            </span>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">Gmail</span>
            <span className="flex-1 font-[300]">nurenijamiu951@gmail.com</span>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">View source</span>
            <Link
              href="https://github.com/NureniJamiu/portfolio-v.3.0"
              target="_blank"
              className="inline font-[300] border-b-[1.5px] border-b-[#727272] hover:border-b-[#673de6]"
            >
              nurenijamiu/nurenijamiu.me
            </Link>
          </div>
          <Divider type="border-dashed" />
          <div className="flex items-center px-4 mt-3">
            <span className="w-36 text-[#727272]">Latest commit</span>
            <span className="flex-1 font-[300] ">
              <code className="bg-[#B8B8B8] dark:bg-[#2B2B2B] px-1 rounded group cursor-pointer">
                <span className="border-b-[1.5px] border-b-[#2B2B2B] dark:border-b-[#727272] group-hover:border-b-[#673de6]">
                  762be99
                </span>
              </code>
            </span>
          </div>
          <Divider type="border-dashed" />
        </div>
      </main>
    </>
  );
}
