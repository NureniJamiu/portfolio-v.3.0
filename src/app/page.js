import Divider from "@/components/custom/Divider";
import WelcomeVid from "@/components/custom/WelcomeVid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-24">
      <div className="my-5">
        <WelcomeVid />
      </div>

      <div className="mt-10 text-[15px]">
        <div className="flex items-center">
          <span className="w-36 text-[#727272]">Name</span>
          <span className="flex-1 font-[300]">Nureni O. Jamiu</span>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">Location</span>
          <span className="flex-1 font-[300]">Lagos, Nigeria</span>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">Work</span>
          <span className="flex-1 font-[300]">
            Web Developer at Boughview Innovations
          </span>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">Colophon</span>
          <span className="flex-1 font-[300]">Nextjs, TailwindCSS, Inter</span>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">Carbon footprint</span>
          <span className="flex-1 font-[300] ">
            <code className="bg-[#B8B8B8] dark:bg-[#2B2B2B] px-1 rounded group cursor-pointer">
              <span className="border-b-[1.5px]  border-b-[#2B2B2B] dark:border-b-[#727272] group-hover:border-b-[#9A8001]">
                0.09 g of CO<sup>2</sup>
              </span>
            </code>
          </span>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">Version</span>
          <span className="flex-1 font-[300]">
            <code className="bg-[#B8B8B8] dark:bg-[#2B2B2B] px-1 rounded">
              <span className="">3.0.0-alpha</span>
            </code>
          </span>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">View source</span>
          <Link
            href="https://github.com/NureniJamiu/portfolio-v.3.0"
            target="_blank"
            className="inline font-[300] border-b-[1.5px] border-b-[#727272] hover:border-b-[#9A8001]"
          >
            nurenijamiu/nurenijamiu.me
          </Link>
        </div>
        <Divider type="border-dashed" />
        <div className="flex items-center mt-3">
          <span className="w-36 text-[#727272]">Latest commit</span>
          <span className="flex-1 font-[300] ">
            <code className="bg-[#B8B8B8] dark:bg-[#2B2B2B] px-1 rounded group cursor-pointer">
              <span className="border-b-[1.5px] border-b-[#2B2B2B] dark:border-b-[#727272] group-hover:border-b-[#9A8001]">
                762be99
              </span>
            </code>
          </span>
        </div>
        <Divider type="border-dashed" />
      </div>
    </main>
  );
}
