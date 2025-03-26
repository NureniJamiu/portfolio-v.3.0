import React from "react";
import Divider from "@/components/custom/Divider";
import WelcomeVid from "@/components/custom/WelcomeVid";

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
              <h4 className="text-lg font-semibold">Hello again, stranger👋</h4>
            </div>
            <p className="text-[14px] text-[#727272]">
              I promise you, this is gonna be a long read.
            </p>
          </div>
          <Divider />
          <div className="mt-6 space-y-4 p-4">
            <p>
              You already know my name by now. If you don&apos;t just scroll up
              – It&apos;s somewhere on this page. <br /> <br /> I believe in
              learning things the long (often harder) way. Not because I
              particularly enjoy struggle, but because struggle refines
              understanding. This website-whatever it is-exists because I
              believe in documenting my journey. Whether or not it&apos;s a wise
              use of my time is debatable, but it feels right to carve out a
              space to express my thoughts.
            </p>
            <p>
              I write code for a living, but I don&apos;t just build software-I
              build things that make sense to me. I started with web development
              because I got good enough to get paid for it, which still feels
              surreal sometimes. Over time, my curiosity led me deeper into{" "}
              <b>cybersecurity</b>, <b>ethical hacking</b>, and{" "}
              <b>project management.</b> Not because these fields are trending,
              but because I enjoy understanding how things work, how they break,
              and how they can be fixed. I thrive in that space between{" "}
              <b>creativity and logic</b>, where things either work or they
              don&apos;t–no fluff, no pretenses, just raw problem-solving.
            </p>
            <p>
              These few words and the things I create are the only traces of my
              existence online. The internet is a strange place- overwhelming,
              distracting, and often destructive. It pulls people in, fragments
              attention, and leaves them restless. I don&apos;t want that for
              myself I don&apos;t want it for the people I care about. I crave
              deep focus but the modern world rarely allows it. So, I build, I
              write, and I think. Discipline and self-reflection keep me
              grounded (along with the occassional walk).
            </p>
            <p>
              I grew up in Nigeria, in a rural area where most people don&apos;t
              know how to use smartphones, and even those who do often struggle
              with reliable internet access. That shaped me. It made me think
              about <b>accessibility</b>–not just in software but in knowledge.
              There&apos;s an entire world of technology out there, but
              it&apos;s mostly built for those who already have access. I want
              to change that in whatever way I can.
            </p>
            <p>
              Somewhere along the way, I found myself leading projects. I study
              Project Managament, and I&apos;ve had the chance to manage real
              teams–seven different clusters in an NGO, to be precise. It
              wasn&apos;t something I planned, but I enjoy it. Organizing ideas,
              coordinating people, making sure things move forward–that&apos;s a
              kind of problem-solving too. it&apos;s messy, unpredictable, and
              human. And for some reason, I like it.
            </p>
            <p>
              I also spend a lot of time tinkering with cybersecurity tools. It
              started with curiosity–why do things break? How do hackers think?
              But then I realized that security is often treated as an
              afterthought in development. So I started building my own tools: a
              network scanner, a MAC address changer, an ARP spoofer. Simple
              things but useful. I want to create security tools that
              aren&apos;t just powerful but intuitive–things that make
              cybersecurity more accessible to developers and everyday users.
            </p>
            <p>
              Most of what I know, I learned by doing. Reading helps, but
              nothing sticks like experience. Unfortunately, that means
              I&apos;ve made a lot of mistakes. I&apos;ve built things that
              didn&apos;t work, led projects that could&apos;ve gone better, and
              spent hours debugging problems that could&apos;ve been avoided.
              But every mistake is a lesson. The internet is filled with passive
              consumption–content that makes you feel like you&apos;re learning
              without actually teaching you anything. I avoid that. I prefer
              deep engagement, building things with my own hands, and pushing
              through the confusion until something clicks.
            </p>
            <p>
              I don&apos;t spend much time thinking about the hottest tech
              stacks or the latest frameworks. They change too often to matter.
              I focus on building things in the simplest way possible. AI? Data?
              Cool tools, but they&apos;re just tools. People obsess over them
              like they&apos;re the future, but the truth is, 80% of what gets
              built is garbage. The same cycle repeats–every new tool brings
              hype, fear, and then eventual indifference. I care about making
              things that work, things that are useful. That&apos;s it.
            </p>
            <p>
              I could talk about my work, my projects, and my technical
              interests for hours, but at the end of the day, I&apos;m just
              trying to figure things out. Where I want to go. What kind of life
              I want to live. What really matters in the long run. That takes up
              most of my free time.
            </p>
            <p>
              I used to be caught up in the noise–social media, trends, endless
              streams of information. Now, I&apos;m reclaiming my attention.
              I&apos;m putting more intention into what I do, focusing on
              what&apos;s worth my time. I don&apos;t track analytics or
              optimize for engagement. If you found this website, you&apos;re
              here because you were meant to be.
            </p>
            <p>
              So, that&apos;s me. A developer, a security enthusiast, a project
              manager, a thinker. Someone who builds because it makes sense to
              build. Someone who questions things, learns by doing, and tries to
              create something meaningful in a world full of distractions.
            </p>
            <p>
              You could be anywhere right now, but you&apos;re here. And for
              that, <b>I&apos;m grateful</b>.
            </p>
          </div>
        </div>
        <Divider type="border-dashed" />
      </div>
    </div>
  );
};

export default Page;
