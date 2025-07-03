import React from 'react';
import Image from 'next/image';

const AuthorBio: React.FC = () => {
  return (
    <div className="bg-[#E8F1FC] dark:bg-slate-800 text-foreground p-6 rounded-lg flex flex-col md:flex-row items-center md:space-x-6 md:space-y-0 space-y-4 lg:mx-0">
      <div className="flex-shrink-0">
        <Image
          className="rounded-full"
          src="/images/eric-allen-profile-pic-2023.png"
          alt="Eric Allen profile picture"
          width={100} // Adjust size as needed
          height={100} // Adjust size as needed
        />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">A little about me</h4>
        <p className="prose text-sm dark:prose-invert">
          I&#39;m Eric—a dad, product designer, and writer living in Austin, Texas. I love learning and sharing with others through my work and writing.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
