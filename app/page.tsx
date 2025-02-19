export const metadata = {
  title: "Eric Allen | UX Designer",
  description: "Welcome to my Next.js 13 portfolio!",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full md:py-8 flex-grow">
        <div className="sm:flex sm:items-center sm:justify-between">
        </div>
        <main className="mx-3 my-4">
          <div className="p-4">
            <h1 className="text-4xl font-bold">Hi! 👋 I&#39;m Eric</h1>
            <p className="text-xl pt-2">
            I&#39;m an Austin-based UX Designer. Occasionally, I write stuff.
            </p>
            <div className="flex flex-col pt-2 gap-4">
              <ul>
                <li>
                  <a
                    href="/projects/project1"
                    className="text-blue-500 hover:underline"
                  >
                    Project 1
                  </a>
                </li>
                <li>
                  <a
                    href="/projects/project2"
                    className="text-blue-500 hover:underline"
                  >
                    Project 2
                  </a>
                </li>
                <li>
                  <a
                    href="/projects/project3"
                    className="text-blue-500 hover:underline"
                  >
                    Project 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
