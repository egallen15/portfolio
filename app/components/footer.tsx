import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://ericallenux.com" className="hover:underline">
            Eric Allen UX
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
