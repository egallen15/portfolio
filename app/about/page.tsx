import React from "react";
import Image from "next/image";
import Timeline, { TimelineEvent } from "../components/Timeline";
import * as motion from "motion/react-client";

export const metadata = {
  title: "About",
  description: "Welcome to my Next.js 13 portfolio!",
};

const About: React.FC = () => {
  // define your timeline data
  const timelineEvents: TimelineEvent[] = [
    { id: 1, date: 'Fall 2015', title: "Started on Subsplash Support",   description: "Joined as Platform Specialist, solving tickets and taking customer service calls.",                side: "left"  },
    { id: 2, date: 'Fall 2018', title: "Redesigned platform onboarding",     description: "Project was key contributor to improved NPS up to 40",        side: "right" },
    { id: 3, date: 'Winter 2018', title: "Subsplash Payment Forms",   description: "Sole UX designer a tool for clients to accept payments from their audience. $40M processed in first 2 years",             side: "left"  },
    { id: 4, date: '2020', title: "Simplify platform signup",   description: "Reduced time to complete by 90%, modernized design, integrated with Stripe, Salesforce, Netsuite",             side: "right" },
    { id: 5, date: '2020', title: "PM + UX on Event Registration",   description: "Led design, strategy, and delivery for Subsplash Event Registration",             side: "left"  },
    { id: 6, date: '2020', title: "Placeholder Event 6",   description: "Description for event 6",             side: "right" },
    { id: 7, date: '2020', title: "Placeholder Event 7",   description: "Description for event 7",             side: "left"  },
    { id: 8, date: '2020', title: "Placeholder Event 8",   description: "Description for event 8",             side: "right" },
    { id: 9, date: '2020', title: "Placeholder Event 9",   description: "Description for event 9",             side: "left"  },
    { id: 10, date: '2020', title: "Placeholder Event 10", description: "Description for event 10",            side: "right" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-8">
      <main className="mx-6 max-w-7xl flex flex-col backdrop-blur-xs rounded-md">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          About Me
        </motion.h1>
        <p className="text-md max-w-3xl py-6 md:py-8">
        I&#39;m Eric—a designer, builder, and writer living in Austin, Texas.
            </p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="self-center"
        >
          <Image
            className="rounded-lg mb-4"
            src="/images/eric-allen-profile-pic-2023.png"
            alt="About us image"
            width="480"
            height="480"
            priority
          />
        </motion.div>
        {/* <svg id="visual"><rect x="0" y="0" width="900" height="600" fill="#FF0066"></rect><g transform="translate(442.29705101177933 280.6360684745338)"><path d="M111.2 -97.5C151.7 -70.7 197.4 -35.4 212.6 15.2C227.8 65.8 212.5 131.5 172 167C131.5 202.5 65.8 207.8 -2.5 210.2C-70.7 212.7 -141.4 212.4 -174.8 176.9C-208.1 141.4 -204 70.7 -201 3.1C-197.9 -64.6 -195.8 -129.2 -162.5 -156C-129.2 -182.8 -64.6 -171.9 -14.6 -157.3C35.4 -142.7 70.7 -124.4 111.2 -97.5" fill="#BB004B"></path></g></svg> */}
        <p className="prose dark:prose-invert pt-3">
          I&#39;m obsessed with learning. I love reading and watching everything I can about science, engineering, product design, and technology and sharing my insights with others.
        </p>
         <p className="prose dark:prose-invert pt-3">
        In my spare time, I enjoy long walks with a good playlist, great films, cooking and eating great food, and solving every little problem in my life no matter how small. As a dad of 3, I love laughing with my wife and children.
        </p>
        <p className="prose dark:prose-invert pt-6">
          I enjoy the thrill of cracking difficult design puzzles with simple
          solutions. If I could choose to do anything, it would be: 
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
        <div className="w-full h-0.5 bg-slate-200 my-8" />
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
              rounded-xs        /* soft corners */
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
