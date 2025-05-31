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
        <p className="prose text-sm dark:prose-invert">
          I&#39;m Eric—a designer, builder, and writer living in Austin, Texas.
        </p>
        <p className="prose text-sm dark:prose-invert pt-3">
        I am obsessed with learning. I love reading and watching everything I can about science, engineering, product, and technology and sharing my insights with others. 
        </p>
        <p className="prose text-sm dark:prose-invert pt-3">
        In my spare time, I enjoy taking long walks with a good playlist, watching great films, cooking and eating great food, and solving every little problem in my life, no matter how small. I also enjoy spending time laughing with my family.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
