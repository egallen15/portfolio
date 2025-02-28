import Image from "next/image";

export const metadata = {
  title: "Eric Allen | UX Designer",
  description: "Austin-based UX Designer. Occasionally writes stuff.",
};

export default function Home() {
  return (

    
    <div className="min-h-screen flex flex-col mx-auto w-full lg:max-w-7xl">
      <div className="w-full md:py-8 flex-grow">
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <main className="mx-3 my-4">
          <div className="p-4">
            <h1 className="text-4xl font-bold">Hi! 👋 I&#39;m Eric</h1>
            <p className="text-xl pt-2">
              I&#39;m an Austin-based UX Designer. Occasionally, I write stuff.
            </p>
          </div>

          {/* Image gallery */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="A plane cockpit"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="A large auditorium"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="Desk with 'Do More' sign"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="Clouds in the sky"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="Mountains"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </section>
          <Image
            src="/images/funnyduck.webp"
            alt="Descriptive alt text"
            width={500}
            height={300}
            className="rounded-lg mt-4"
          />
        </main>
      </div>
    </div>
  );
}
