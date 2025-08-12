import Image from "next/image";

export default function BentoGrid() {
  return (
    <div className="">
      <div className="xl:mx-auto max-w-2xl lg:max-w-7xl">
      
        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-slate-50 lg:rounded-l-[2rem] dark:bg-slate-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-slate-700 bg-slate-900 shadow-2xl dark:shadow-none dark:outline dark:outline-1 dark:outline-white/20">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 lg:rounded-l-[2rem] dark:outline-white/15" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] dark:bg-slate-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs dark:hidden"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""

                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="hidden w-full max-lg:max-w-xs dark:block"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-t-[2rem] dark:outline-white/15" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-slate-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover dark:hidden"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="hidden h-[min(152px,40cqw)] object-cover dark:block"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 dark:outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] dark:bg-slate-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-slate-900 shadow-2xl outline outline-1 outline-white/10 dark:bg-slate-900/60 dark:shadow-none">
                  <div className="flex bg-slate-900 outline outline-1 outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-slate-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-slate-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    {/* Your code example */}asdfasdfadf
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
