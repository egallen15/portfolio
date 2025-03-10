import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: "Welcome to my Next.js 13 portfolio!",
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-8 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-6 max-w-7xl flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
        <p className="text-md max-w-3xl pt-6 md:pt-8">
        I&#39;m Eric--an optimistic realist with a passion for design,
        learning, and writing.
            </p>
        <Image
          className="dark:invert"
          src="https://placehold.co/600x400"
          alt="About us image"
          width={600}
          height={400}
          priority
        />
        <p className="text-lg prose-invert max-w-3xl">
          In 2018, I joined Subsplash as a UX Designer. Since then, I&#39;ve helped
          Subsplash ship dozens of experiences: Launched new products
          contributing to 6 years of ~40% YOY growth. Designed core payment flows
          generating millions in recurring revenue. Iterated on dozens of
          improvements across a broad platform (web, mobile, TV). Trained new UX
          Designers on how to maintain Subsplash&#39;s industry-leading NPS scores
          (35+). I enjoy the thrill of cracking intricate design puzzles with
          simple solutions. My top career ambitions are: Build beautiful
          products that solve real problems, cultivate strong and meaningful
          friendships with teammates, and make work feel like play by empowering
          authenticity. I live in the Austin, TX area with my family. My perfect
          day starts with a walk to a café, and ends with a great movie. I&#39;m
          always up for a chat about design, tech, or life in general. Feel free
          to reach out!
        </p>
        
      </main>
    </div>
  );
};

export default About;
