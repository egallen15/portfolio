import Image from 'next/image'

export default function Example() {
  return (
    <section className="bg-white py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Image
              alt="Tuple logo"
              src="https://tailwindcss.com/plus-assets/Image/logos/tuple-logo-gray-900.svg"
              width={48}
              height={48}
              className="h-12 self-start dark:hidden"
            />
            <Image
              alt="Tuple logo"
              src="https://tailwindcss.com/plus-assets/Image/logos/tuple-logo-white.svg"
              width={48}
              height={48}
              className="hidden h-12 self-start dark:block"
            />
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-gray-900 dark:text-gray-100">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                  arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                  ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt="Judith Black"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  width={56}
                  height={56}
                  className="size-14 rounded-full bg-gray-50 dark:bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900 dark:text-white">Judith Black</div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 dark:border-white/10">
            <Image
              alt="Reform logo"
              src="https://tailwindcss.com/plus-assets/Image/logos/reform-logo-gray-900.svg"
              width={48}
              height={48}
              className="h-12 self-start dark:hidden"
            />
            <Image
              alt="Reform logo"
              src="https://tailwindcss.com/plus-assets/Image/logos/reform-logo-white.svg"
              width={48}
              height={48}
              className="hidden h-12 self-start dark:block"
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-gray-900 dark:text-gray-100">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                  reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                  dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt="Joseph Rodriguez"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  width={56}
                  height={56}
                  className="size-14 rounded-full bg-gray-50 dark:bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900 dark:text-white">Joseph Rodriguez</div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
