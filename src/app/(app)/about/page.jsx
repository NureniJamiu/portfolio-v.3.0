import React from "react";
import Divider from "@/components/custom/Divider";
import WelcomeVid from "@/components/custom/WelcomeVid";
import { DotSquare } from "lucide-react";

const Page = () => {
    return (
        <div>
            <div className="p-4">
                <WelcomeVid />
            </div>
            <Divider />

            <div>
                <div className="text-[15px] text-[#2b2b2b] dark:text-neutral-300">
                    <div className="p-4">
                        <div className="flex items-end gap-1">
                            <h4 className="text-lg font-semibold">
                                Hello again, Friend👋
                            </h4>
                        </div>
                        <p className="text-[14px] text-[#727272]">
                            This is a somewhat <i>long</i> read.
                        </p>
                    </div>
                    <Divider />
                    <div className="mt-6 space-y-4 p-4">
                        <p>
                            You already know my name by now. If you don&apos;t,
                            just scroll up – It&apos;s somewhere on this page.
                        </p>

                        <h4 className="flex text-lg font-semibold gap-2 items-center">
                            Connecting the Dots <DotSquare />
                        </h4>
                        <p>
                            I believe in learning things the long (often harder)
                            way. Not because I particularly enjoy struggle, but
                            because struggle refines understanding. This website
                            — whatever it is — exists because I believe in
                            documenting my journey. Whether or not it&apos;s a
                            wise use of my time is debatable, but it feels right
                            to carve out a space to express my thoughts.
                        </p>
                        <p>
                            I&apos;ve done a lot of things; some connected, some
                            not so obviously. I started with code because it was
                            something I could learn on my own, something
                            concrete. It made sense. Over time, that curiosity
                            pulled me into <b>Cybersecurity</b>, then back into{" "}
                            <b>Web Development</b>, then into{" "}
                            <b>Project Management</b>. Different directions,
                            same mind. I didn&apos;t plan it that way. I just
                            kept following what made me curious and what
                            didn&apos;t leave me alone.
                        </p>
                        <p>
                            Most days, I don&apos;t have a neat story to tell
                            about how it all fits. I&apos;ve led teams (however
                            small) and also broken things apart just to see how
                            they work. I&apos;ve developed web apps, built
                            security tools, managed people, and spent hours just
                            thinking. It&apos;s not always clear how these
                            experiences relate. But deep down, I believe the
                            dots will connect. Maybe not today, maybe not soon,
                            but eventually.
                        </p>
                        <p>Right now, I&apos;m still creating the dots.</p>
                        <p>
                            I&apos;ve come to accept that not everything I do
                            has to make sense in the moment. That the path can
                            look scattered, and still be a path. There&apos;s
                            something freeing in that. I&apos;ve stopped trying
                            to force it all in a clean narrative. Instead,
                            I&apos;m leaning into the unknown, like building,
                            messing up, and trying again. There&apos;s a quiet
                            kind of excitement in not knowing where it&apos;s
                            all leading (not fear though, just curiosity).
                        </p>
                        <p>
                            I grew up in rural Nigeria, where access to
                            technology was limited. That reality made the
                            internet feel both miraculous and alien. It also
                            made me think deeply about accessibility, which is
                            not just in apps, but in knowledge. That part of me
                            is still here, still questioning who gets left out
                            and how we can do better.
                        </p>
                        <p>
                            I&apos;m not building things to chase trends. I
                            build because I want to understand. I want to solve
                            real problems. Because I like the space where
                            creativity meets logic; where things either work or
                            they don&apos;t. I like that clarity. It&apos;s
                            honest.
                        </p>
                        <p>
                            Somewhere along the line, I started managing
                            projects. Not because I wanted to be in charge, but
                            because I cared about making ideas move forward. I
                            learned to coordinate people, and keep things going
                            even when nothing goes as planned. That, too, felt
                            connected to the rest, just in a different way.
                        </p>
                        <p>
                            Most of what I know, I learned by doing. Reading
                            helps, but nothing sticks like experience.
                            Unfortunately, that means I&apos;ve made a lot of
                            mistakes. I&apos;ve built things that didn&apos;t
                            work, led projects that could&apos;ve gone better,
                            and spent hours debugging problems that
                            could&apos;ve been avoided. But every mistake is a
                            lesson. The internet is filled with passive
                            consumption — content that makes you feel like
                            you&apos;re learning without actually teaching you
                            anything. I avoid that. I prefer deep engagement,
                            building things with my own hands, and pushing
                            through the confusion until something clicks.
                        </p>
                        <p>
                            I don&apos;t spend much time thinking about the
                            hottest tech stacks or the latest frameworks (but
                            that doesn&apos;t mean I don&apos;t have my
                            favorites). They change too often to matter. I focus
                            on building things in the simplest way possible.
                            Most new things are noise. I care about building
                            useful things; the kind that quietly do their job
                            without needing attention.
                        </p>
                        <p>
                            I still don&apos;t know how it all ties together. I
                            just know I care deeply about the things I do. And
                            that has to mean something.
                        </p>
                        <p>
                            So for now, I&apos;ll keep building, keep learning,
                            keep writing. I&apos;ll keep following the questions
                            that won&apos;t leave me alone. Maybe someday,
                            I&apos;ll look back and the picture will be clear.
                            The dots will connect. And maybe I&apos;ll even
                            smile at how unsure I was.
                        </p>
                        <p>
                            But until then, I&apos;m here. Building, learning,
                            and exploring.
                        </p>
                        <p>One dot at a time.</p>
                        <p>
                            You could be anywhere right now, but you&apos;re
                            here. And for that, <b>I&apos;m grateful</b>.🙏😊
                        </p>
                    </div>
                </div>
                <Divider type="border-dashed" />
            </div>
        </div>
    );
};

export default Page;
