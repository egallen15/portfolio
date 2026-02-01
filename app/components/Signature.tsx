import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signature: React.FC = () => {
  return (
    <div className="text-foreground mx-6 md:mx-0 flex justify-start items-center gap-2 mb-9">
      <Link href="/about" className="flex items-center gap-6 hover:scale-105 hover:-rotate-2 transition-transform">
        <Image
          src="/images/eric-allen-profile-pic-2023.png"
          alt="Eric Allen logo"
          width={36}
          height={36}
          className="rounded-lg stacked-shadow"
        />
      </Link>
      <div className="">
        <Image
          src="/images/eric-allen-signature.svg"
          alt="Eric Allen signature"
          width={180}
          height={60}
          className="h-auto w-12 dark:invert"
        />
      </div>
    </div>
  );
};

export default Signature;
