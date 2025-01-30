import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="mr-3 flex flex-row gap-8 items-center text-center justify-center flex-1 max-w-screen-sm w-full p-12">
        <div className="p-4"> {/* Added padding here */}
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-xl">
            Hi, I'm Eric, a UX Designer. Here are some of my projects:
          </p>
          <div className="flex flex-col gap-4">
            <ul>
              <li>
                <a href="/projects/project1" className="text-blue-500 hover:underline">
                  Project 1
                </a>
              </li>
              <li>
                <a href="/projects/project2" className="text-blue-500 hover:underline">
                  Project 2
                </a>
              </li>
              <li>
                <a href="/projects/project3" className="text-blue-500 hover:underline">
                  Project 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
