"use client";

import * as motion from "motion/react-client";
import HighlightedHeading from "./HighlightedHeading";

export default function Skills() {
  return (
    <motion.section className="w-full lg:w-1/2 mt-12 lg:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <HighlightedHeading
          highlightColor="pink"
          highlightStyle="underline"
          skewAngle="light"
          as="h3"
          className="mb-6"
        >
          Skills
        </HighlightedHeading>
        
        {/* Legend */}
        <div className="mb-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-200 dark:bg-indigo-400"></div>
            <span className="text-gray-600 dark:text-gray-400">Design</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-200 dark:bg-yellow-400"></div>
            <span className="text-gray-600 dark:text-gray-400">Business & Soft Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-200 dark:bg-emerald-400"></div>
            <span className="text-gray-600 dark:text-gray-400">Technical</span>
          </div>
        </div>

        {/* All Skills - Simplified Color Coding */}
        <div className="flex flex-wrap gap-3">
          {/* Design Skills - All Indigo */}
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            UX Design
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Visual Design (UI)
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Prototyping
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Wireframing
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            User journey maps & flows
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            User research
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Design systems
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Video editing
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Photography
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Video production
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Accessibility
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Data visualization
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Motion design & animation
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Sketching
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            Information architecture
          </span>
          <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
            UX Writing
          </span>

          {/* Business & Soft Skills - All orange */}
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            Product management
          </span>
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            Listening
          </span>
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            Leadership
          </span>
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            Strategy
          </span>
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            Writing
          </span>
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            Empathy
          </span>

          {/* Technical Skills - All Emerald */}
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            Web development
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            React
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            HTML/CSS
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            Git
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            AI
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
            Github Copilot
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
