import React from "react";
import Image from "next/image";

export const metadata = {
  title: 'My blog',
  description: 'Welcome to my Next.js 13 portfolio!',
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex justify-center items-center w-full">
        <main className="flex flex-col gap-8 items-center text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg">
                Welcome to our website. We are dedicated to providing the best service possible.
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
    </div>
  );
};

export default About;
