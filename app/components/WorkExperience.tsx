import Image from "next/image";
import * as motion from "motion/react-client";

interface WorkExperienceItemProps {
  logo: string;
  company: string;
  position: string;
  dateRange: string;
  logoAlt?: string;
}

interface WorkExperienceProps {
  experiences?: WorkExperienceItemProps[];
  cvDownloadUrl?: string;
}

const defaultExperiences: WorkExperienceItemProps[] = [
  {
    logo: "/images/subsplash.png", // We'll create this
    company: "Subsplash",
    position: "UX Designer III",
    dateRange: "April 2024 — Present",
    logoAlt: "Subsplash logo"
  },
  {
    logo: "/images/subsplash.png", // We'll create this
    company: "Subsplash",
    position: "UX Designer II",
    dateRange: "Apr 2021 — Apr 2024",
    logoAlt: "Subsplash logo"
  },
  {
    logo: "/images/subsplash.png",
    company: "Subsplash",
    position: "UX Designer I",
    dateRange: "Oct 2018 — Apr 2021",
    logoAlt: "Freelance logo"
  },
  {
    logo: "/images/subsplash.png",
    company: "Subsplash",
    position: "UX Design Intern",
    dateRange: "Apr 2018 — Oct 2018",
    logoAlt: "Subsplash logo"
  },
  {
    logo: "/images/sleeping-giant.png",
    company: "Sleeping Giant",
    position: "Sales & Marketing",
    dateRange: "Sep 2017 — Apr 2018",
    logoAlt: "Sleeping Giant logo"
  },
  {
    logo: "/images/subsplash.png",
    company: "Subsplash",
    position: "Support Specialist",
    dateRange: "Sep 2015 — Sep 2017",
    logoAlt: "Subsplash logo"
  },
  {
    logo: "/images/general-assembly.png", 
    company: "General Assembly",
    position: "UX Immersive Student",
    dateRange: "Dec 2014 — Feb 2015",
    logoAlt: "General Assembly logo"
  }
];

function WorkExperienceItem({ logo, company, position, dateRange, logoAlt }: WorkExperienceItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-start gap-4 py-2 sm:py-4"
    >
      {/* Company Logo */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-50 dark:bg-slate-700 flex items-center justify-center p-1">
        <Image
          src={logo}
          alt={logoAlt || `${company} logo`}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Company Info & Date Range Container */}
      <div className="flex-grow min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {/* Company Info */}
        <div className="flex-grow min-w-0">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white truncate">
            {company}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
            {position}
          </p>
          {/* Date Range - Mobile only (on new line) */}
          <p className="text-xs sm:hidden text-slate-500 dark:text-slate-400 mt-0.5">
            {dateRange}
          </p>
        </div>
        
        {/* Date Range - Desktop only */}
        <div className="hidden sm:block flex-shrink-0 text-right">
          <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {dateRange}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkExperience({ 
  experiences = defaultExperiences, 
  cvDownloadUrl = "/Eric-Allen-CV.pdf" 
}: WorkExperienceProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative mx-auto"
    >
      {/* Background layer - matches BentoGrid pattern */}
      <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-slate-800" />
      
      {/* Content layer */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-6">

        {/* Experience List */}
        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <WorkExperienceItem
              key={`${experience.company}-${index}`}
              {...experience}
            />
          ))}
        </div>

        {/* Download CV Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 border-gray-200 dark:border-slate-700"
        >
          <a
            href={cvDownloadUrl}
            download
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors duration-200 group"
          >
            <span>Download CV</span>
            {/* Download Icon */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Pointer events overlay - matches BentoGrid pattern */}
      <div className="pointer-events-none absolute inset-px rounded-lg" />
    </motion.div>
  );
}
