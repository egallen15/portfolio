import React from "react";
import Image from "next/image";

export const metadata = {
  title: 'About',
  description: 'Welcome to my Next.js 13 portfolio!',
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pb-20 sm:p-20">
      <main className="flex flex-col items-center justify-center w-full max-w-[1024px] mx-auto gap-8 text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg">
          I&#39;m Eric—an optimistic realist with a passion for design, learning, and writing.
        </p>
        <Image
          className="dark:invert"
          src="https://placehold.co/600x400"
          alt="About us image"
          width={600}
          height={400}
          priority
        />
      </main>
    </div>
  );
};

export default About;
