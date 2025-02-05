import type { FC } from 'react'
import Image from 'next/image'
 
export const Footer: FC = () => {
  return (
    

<footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="https://ericallenux.com" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <Image src="https://placehold.co/320x320" className="h-8" alt="Flowbite Logo" width={32} height={32} />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eric Allen UX</span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {new Date().getFullYear()} <a href="https://ericallenux.com" className="hover:underline">Eric Allen UX</a>. All Rights Reserved.
    </span>
  </div>
</footer>


  )
}