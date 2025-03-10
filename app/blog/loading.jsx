export default function Loading() {
  return (
    <div className="flex w-full max-w-7xl mx-auto">
      <div className='w-full'>
        <h1 className="text-3xl md:text-5xl font-bold mx-6 mb-4">Loading...</h1>
        <div className="flex flex-col space-y-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="p-4 border rounded-lg shadow-sm animate-pulse"
            >
              <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
