import React from "react";
import Image from "next/image";
import Timeline, { TimelineEvent } from "../components/Timeline";

export const metadata = {
  title: "About",
  description: "Welcome to my Next.js 13 portfolio!",
};

const About: React.FC = () => {
  // define your timeline data
  const timelineEvents: TimelineEvent[] = [
    { id: 1, title: "Started at Subsplash",   description: "Joined as UX Designer",                side: "left"  },
    { id: 2, title: "Launched Product X",     description: "Contributed to 40% YOY growth",        side: "right" },
    { id: 3, title: "Placeholder Event 3",   description: "Description for event 3",             side: "left"  },
    { id: 4, title: "Placeholder Event 4",   description: "Description for event 4",             side: "right" },
    { id: 5, title: "Placeholder Event 5",   description: "Description for event 5",             side: "left"  },
    { id: 6, title: "Placeholder Event 6",   description: "Description for event 6",             side: "right" },
    { id: 7, title: "Placeholder Event 7",   description: "Description for event 7",             side: "left"  },
    { id: 8, title: "Placeholder Event 8",   description: "Description for event 8",             side: "right" },
    { id: 9, title: "Placeholder Event 9",   description: "Description for event 9",             side: "left"  },
    { id: 10, title: "Placeholder Event 10", description: "Description for event 10",            side: "right" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-8">
      <main className="mx-6 max-w-7xl flex flex-col backdrop-blur-sm px-8 rounded-md">
        <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
        <p className="text-md max-w-3xl py-6 md:py-8">
        I&#39;m Eric—an optimistic realist with a passion for design,
        learning, and writing.
            </p>
        <Image
          className="rounded-lg self-center"
          src="/images/eric-allen-profile-pic-2023.png"
          alt="About us image"
          width="480"
          height="480"
          priority
        />
        {/* <svg id="visual"><rect x="0" y="0" width="900" height="600" fill="#FF0066"></rect><g transform="translate(442.29705101177933 280.6360684745338)"><path d="M111.2 -97.5C151.7 -70.7 197.4 -35.4 212.6 15.2C227.8 65.8 212.5 131.5 172 167C131.5 202.5 65.8 207.8 -2.5 210.2C-70.7 212.7 -141.4 212.4 -174.8 176.9C-208.1 141.4 -204 70.7 -201 3.1C-197.9 -64.6 -195.8 -129.2 -162.5 -156C-129.2 -182.8 -64.6 -171.9 -14.6 -157.3C35.4 -142.7 70.7 -124.4 111.2 -97.5" fill="#BB004B"></path></g></svg> */}
        <p className="prose dark:prose-invert pt-6">
          In 2018, I joined Subsplash as a UX Designer. Since then, I&#39;ve helped
          Subsplash ship dozens of experiences: 
        </p>
        <ul className="prose dark:prose-invert pt-6 list-disc list-inside"> 
          <li>Launched new products contributing to 6 years of ~40% YOY growth.</li>
          <li>Designed core payment flows generating millions in recurring revenue.</li>
          <li>Iterated on dozens of improvements across a broad platform (web, mobile, TV).</li>
          <li>Trained new UX Designers on how to maintain Subsplash&#39;s industry-leading NPS scores (35+).</li>
        </ul>
        <p className="prose dark:prose-invert pt-6">
          I enjoy the thrill of cracking difficult design puzzles with simple
          solutions. My goals and ambitions are: 
        </p>
        <ul className="prose dark:prose-invert pt-6 list-disc list-inside"> 
          <li>To build beautiful, beloved, and useful things</li>
          <li>To cultivate strong and meaningful friendships with teammates</li>
          <li>To make work feel like play by empowering authenticity</li>
          <li>To love and help others</li>
          <li>To discover who I am</li>
        </ul>
        <p className="prose dark:prose-invert pt-6">
          I live in the Austin, TX area with my family. My perfect day starts
          with a walk to a café, and ends with a great movie. I&#39;m always up
          for a chat about design, tech, or life in general. Feel free to reach
          out!
        </p>
        <div className="w-full h-1 bg-slate-200 my-8" />
        <h3 className="relative inline-block text-2xl font-bold pt-16">
          {/* pink skewed “hand‑drawn” highlight */}
          <span
            className="
              absolute
              bottom-1          /* nudge it up a bit under the text baseline */
              left-0
              min-w-fit
              h-3               /* highlight thickness */
              bg-pink-300       /* highlight color */
              skew-y-2          /* slight skew for hand‑drawn feel */
              transform
              origin-left       /* skew around the left edge */
              rounded-sm        /* soft corners */
            "
          />
          <span className="relative z-10">
            My journey
          </span>
        </h3>
        <Timeline events={timelineEvents} />
      </main>
    </div>
  );
};

export default About;
