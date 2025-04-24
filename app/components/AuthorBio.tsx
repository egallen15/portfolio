import React from 'react';
import Image from 'next/image';

const AuthorBio: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 text-foreground p-6 rounded-lg flex items-start justify-center space-x-6 max-w-4xl mx-6 lg:mx-0">
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
          I&#39;m a UX designer and writer living in Austin, Texas. I get a kick out of empowering
          designers to do their very best work. In my spare time, I love long walks with a
          good playlist, spending time with my family, and watching great films.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
