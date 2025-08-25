import ShowcaseCard from "@/components/custom/ShowcaseCard";
import React from "react";

const Page = () => {
    return (
        <div className="relative isolate min-h-screen bg-white dark:bg-black">
            {/* Main Content */}
            <main className="relative z-10 px-4 py-20 text-center text-gray-900 dark:text-white">
                <h1 className="text-3xl font-bold">Project Showcase</h1>
                <p className="mt-4 text-lg">
                    Here is a clean showcase of my projects.
                </p>

                {/* ShowcaseCard Demo  */}
                <div className="grid md:grid-cols-2 gap-6 mt-10 border-y border-neutral-800">
                    <ShowcaseCard
                        title="Screenforge"
                        imageSrc="/images/screenforge.png"
                        videoSrc={"/videos/screenforge.webm"}
                        description="Record, Edit, and Share like a pro"
                    />
                    <ShowcaseCard
                        title="Ekopulse"
                        imageSrc="/images/ekopulse.png"
                        videoSrc={"/videos/screenforge.webm"}
                        description="The IDE with superpowers."
                    />
                </div>
                {/* <div className="grid md:grid-cols-2 gap-6 mt-10 border-y border-neutral-800">
                    <ShowcaseCard
                        title="NX-IDE"
                        imageSrc="/images/preview.png"
                        videoSrc={"/videos/preview.webm"}
                        description="The IDE with superpowers."
                    />
                    <ShowcaseCard
                        title="NX-IDE"
                        imageSrc="/images/preview.png"
                        videoSrc={"/videos/preview.webm"}
                        description="The IDE with superpowers."
                    />
                </div> */}
            </main>
        </div>
    );
};

export default Page;
