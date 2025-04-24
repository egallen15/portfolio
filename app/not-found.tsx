import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center bg-sky-300/10 rounded-md backdrop-blur-lg text-center p-12">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}