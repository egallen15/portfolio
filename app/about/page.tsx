import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: "Welcome to my Next.js 13 portfolio!",
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-8">
      <main className="mx-6 max-w-7xl flex flex-col backdrop-blur-sm p-8 rounded-md">
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
      </main>
    </div>
  );
};

export default About;
