import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AuthorBio: React.FC = () => {
  return (
    <div className="text-foreground bg-[#F4F6FD] dark:bg-slate-800 p-5 mx-6 max-w-3xl lg:items-center rounded-lg flex flex-col justify-center md:flex-row md:space-x-6 md:space-y-0 space-y-4 lg:mx-auto">
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
        <h4 className="text-xl font-bold mb-2">
          About{' '}
          <Link href="/about" className="hover:underline">
            Eric Allen
          </Link>
        </h4>
        <p className="prose text-sm  leading-relaxed dark:prose-invert">
          I&#39;m a UX designer/writer living in Austin, Texas, and I get a kick out of empowering people to do their best work.
        </p>
        <p className='prose text-sm leading-relaxed dark:prose-invert mt-2'>
          In my spare time, I love long walks with a good playlist, spending time with my wife and three kids, playing and making games, and watching great films.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
