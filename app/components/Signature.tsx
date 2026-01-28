import React from "react";
import Image from "next/image";

const Signature: React.FC = () => {
  return (
    <div className="text-foreground mx-6 md:mx-0 flex justify-start items-center gap-2 mb-9">
      <div className="flex items-center gap-6">
        <Image
          src="/images/eric-allen-profile-pic-2023.png"
          alt="Eric Allen logo"
          width={36}
          height={36}
          className="rounded-lg"
        />
      </div>
      <p className="text-sm md:text-base">
      </p>
      <div className="-ml-2">
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
