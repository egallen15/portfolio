import React from 'react';
import Image from 'next/image';

const AuthorBio: React.FC = () => {
  return (
    <div className="bg-[#E8F1FC] dark:bg-slate-800 text-foreground p-6 rounded-lg flex flex-col md:flex-row items-start justify-center md:space-x-6 md:space-y-0 space-y-4 max-w-4xl mx-6 lg:mx-0">
      <div className="flex-shrink-0">
        <Image
          className="rounded-full"
          src="/images/eric-allen-profile-pic-2023.png"
          alt="Eric Allen profile picture"
          width={100} // Adjust size as needed
          height={100} // Adjust size as needed
          priority // Load image sooner if it's important
        />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">A little about me</h4>
        <p className="prose dark:prose-invert">
          I&#39;m Eric, a product designer and writer living in Austin, Texas. I made this blog to empower people to do their best work. 
        </p>
        <p className="prose dark:prose-invert pt-6">
        I am obsessed with learning (about science, engineering, product, design, film, and technology) and sharing my insights with others. In my spare time, I love taking long walks with a good playlist, and spending time with my family.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
