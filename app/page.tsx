export const metadata = {
  title: 'Home',
  description: 'Welcome to my Next.js 13 portfolio!',
};

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold dark:text-white">Welcome to My Portfolio</h1>
        {/* Optionally, add navigation links or additional header content here */}
      </div>
      <main className="mx-3 my-4"> {/* Corrected margin classes */}
        <div className="p-4"> {/* Added padding here */}
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-xl pt-2">
            Hi, my name is Eric, a UX Designer. Here are some of my projects:
          </p>
          <div className="flex flex-col pt-2 gap-4">
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
