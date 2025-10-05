import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export interface ProjectGridItem {
  id: string;
  href: string;
  title: string;
  description: string;
  // Either image (full image) or logo (icon/logo)
  image?: string;
  logo?: string;
  // Optional dark mode variants
  darkImage?: string;
  darkLogo?: string;
}

interface ProjectGridProps {
  items: ProjectGridItem[];
  columns?: 2 | 3 | 4;
}

export default function ProjectGrid({ items, columns = 3 }: ProjectGridProps) {
  const gridColsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }[columns];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className={`grid ${gridColsClass} gap-6`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-full"
            >
              <Link 
                href={item.href}
                className="group block h-full"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="absolute inset-px rounded-2xl bg-slate-50 dark:bg-slate-800 transition-all duration-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-700" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex flex-col p-8 gap-4">
                    {/* Logo or Image Section */}
                    {item.logo && (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 p-3 transition-all duration-300 group-hover:scale-105">
                        <Image
                          src={item.logo}
                          alt={`${item.title} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain dark:hidden"
                        />
                        {item.darkLogo && (
                          <Image
                            src={item.darkLogo}
                            alt={`${item.title} logo`}
                            width={64}
                            height={64}
                            className="hidden w-full h-full object-contain dark:block"
                          />
                        )}
                      </div>
                    )}

                    {item.image && !item.logo && (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover dark:hidden transition-transform duration-300 group-hover:scale-105"
                        />
                        {item.darkImage && (
                          <Image
                            src={item.darkImage}
                            alt={item.title}
                            fill
                            className="hidden object-cover dark:block transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    {/* Link indicator */}
                    <div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
                        />
                      </svg>
                      <span className="text-xs">
                        {item.href.startsWith('http') 
                          ? new URL(item.href).hostname.replace('www.', '')
                          : 'View project'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-slate-950/5 dark:ring-white/10 transition-all duration-300 group-hover:ring-blue-500/20 group-hover:shadow-md" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
