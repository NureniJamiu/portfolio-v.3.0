import Divider from "@/components/custom/Divider";
import PageTitle from "@/components/custom/PageTitle";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <PageTitle title="Now" description="This is what I'm currently doing." />

      <div className=" text-[#2b2b2b] dark:text-[#dbdbdb] space-y-6">
        <div className="space-y-4">
          <h4 className="text-lg font-bold pt-4 px-4 ">
            What I&apos;m Building
          </h4>
          <p className="px-4 text-[15px]">
            I&apos;m currently building a{" "}
            <Link className="underline" href="https://mcps.xxko.vercel.app">
              client web app
            </Link>{" "}
            (frontend). It&apos;s one of those projects where everything is
            coming together in a way that actually makes me proud. The structure
            feels right, best practices are clicking, caching is making things
            faster, optimization is making things smoother, and advanced
            form-handling is… well, advanced. It&apos;s not without its
            challenges, but what&apos;s learning without a little suffering?
          </p>
          <Divider />
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold pt-2 px-4 ">
            What I&apos;m Learning
          </h4>
          <p className="px-4 text-[15px]">
            Lately, I&apos;ve been reading <b>"The Rules of People"</b> by{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Richard_Templar"
              className="font-bold underline"
            >
              Richard Templar.
            </Link>
            I&apos;ve been a fan for a long time—probably longer than I should
            admit. Something about his writing just always hits. Also, I&apos;m
            knee-deep in figuring out how to make web and mobile apps
            faster—because, apparently, speed is everything. And since I come
            from a bare-metal React Native background, exploring Expo feels like
            I&apos;ve been dropped into a futuristic city where everything works
            differently but somehow better.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold pt-2 px-4 ">
            What&apos;s challenging me?
          </h4>
          <p className="px-4 text-[15px]">
            Challenges? Too many to list. The double degree pursuit alone is
            enough to make me question my life choices. Then there&apos;s the
            leadership stuff—I somehow keep finding myself in positions that
            demand my attention, even when I tell myself I&apos;ll step back.
            Add work to that mix, and you&apos;ve got a schedule that looks like
            a glitch in the matrix. But I&apos;ve gotten better at planning,
            prioritizing, and making peace with chaos. So, I guess it&apos;s not
            all bad.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold pt-2 px-4 ">Beyond all that</h4>
          <p className="px-4 text-[15px]">
            Beyond all that, I actually enjoy spending time with my girlfriend
            (yeah, shocking). She&apos;d probably argue that I don&apos;t say it
            enough, so here it is, documented for the internet to see. I also
            write, because words have a way of making things feel more real. And
            when my brain refuses to shut up, evening/night walks help.
            Something about the quiet, the empty streets, and the occasional
            deep thought that may or may not be life-changing.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold pt-2 px-4 ">What&apos;s next?</h4>
          <p className="px-4 text-[15px]">
            At the end of the day, I just want everything I&apos;m into right
            now to work out—the projects, the learning, the relationships, the
            leadership roles, all of it. And if that&apos;s too much to ask,
            then at least let my Wi-Fi stay stable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
