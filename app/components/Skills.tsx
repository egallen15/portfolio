"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import HighlightedHeading from "./HighlightedHeading";

type SkillCategory = "design" | "product" | "soft" | "technical";

interface Skill {
  name: string;
  category: SkillCategory;
}

const skills: Skill[] = [
  // Design Skills
  { name: "UX Design", category: "design" },
  { name: "Visual Design (UI)", category: "design" },
  { name: "Prototyping", category: "design" },
  { name: "Wireframing", category: "design" },
  { name: "User journey maps & flows", category: "design" },
  { name: "User research", category: "design" },
  { name: "Design systems", category: "design" },
  { name: "Video editing", category: "design" },
  { name: "Photography", category: "design" },
  { name: "Video production", category: "design" },
  { name: "Accessibility", category: "design" },
  { name: "Data visualization", category: "design" },
  { name: "Motion design & animation", category: "design" },
  { name: "Sketching", category: "design" },
  { name: "Information architecture", category: "design" },
  { name: "UX Writing", category: "design" },
  // Product Skills
  { name: "Product management", category: "product" },
  { name: "Strategy", category: "product" },
  // Technical Skills
  { name: "Web development", category: "technical" },
  { name: "React", category: "technical" },
  { name: "TypeScript", category: "technical" },
  { name: "HTML/CSS", category: "technical" },
  { name: "Next.js", category: "technical" },
  { name: "Git", category: "technical" },
  { name: "AI", category: "technical" },
  { name: "Github Copilot", category: "technical" },
  // Soft Skills
  { name: "Listening", category: "soft" },
  { name: "Leadership", category: "soft" },
  { name: "Writing", category: "soft" },
  { name: "Empathy", category: "soft" },
];

const categoryStyles = {
  design: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
  product: "bg-yellow-100 dark:bg-yellow-900 text-orange-800 dark:text-orange-200",
  soft: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
  technical: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
};

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<SkillCategory>>(
    new Set()
  );

  const toggleCategory = (category: SkillCategory) => {
    setVisibleCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        // If clicking the only selected category, clear all (show all)
        if (newSet.size === 1) {
          return new Set();
        }
        newSet.delete(category);
      } else {
        // If nothing selected, just add this one
        if (prev.size === 0) {
          return new Set([category]);
        }
        // Otherwise just add it (allow all 4 to be selected)
        newSet.add(category);
      }
      return newSet;
    });
  };

  const resetCategories = () => {
    setVisibleCategories(new Set());
  };

  // Show all if nothing selected, otherwise show only selected
  const isCategoryVisible = (category: SkillCategory) => {
    if (visibleCategories.size === 0) return true;
    return visibleCategories.has(category);
  };

  // Category is "selected" (bolded) only if it's in the set and not all are selected
  const isCategorySelected = (category: SkillCategory) => {
    return visibleCategories.size > 0 && visibleCategories.has(category);
  };

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
        <div className="mb-6 flex flex-wrap gap-4 text-sm items-center">
          <button
            onClick={() => toggleCategory("design")}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            aria-label="Toggle design skills"
          >
            <div 
              className={`w-3 h-3 rounded-full bg-indigo-200 dark:bg-indigo-400 transition-all ${
                isCategorySelected("design") ? "opacity-100 scale-110" : "opacity-100"
              }`}
            ></div>
            <span 
              className={`text-gray-600 dark:text-gray-400 transition-all ${
                isCategorySelected("design") ? "font-bold text-gray-900 dark:text-gray-100" : ""
              }`}
            >
              Design
            </span>
          </button>
          <button
            onClick={() => toggleCategory("product")}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            aria-label="Toggle product skills"
          >
            <div 
              className={`w-3 h-3 rounded-full bg-yellow-200 dark:bg-yellow-400 transition-all ${
                isCategorySelected("product") ? "opacity-100 scale-110" : "opacity-100"
              }`}
            ></div>
            <span 
              className={`text-gray-600 dark:text-gray-400 transition-all ${
                isCategorySelected("product") ? "font-bold text-gray-900 dark:text-gray-100" : ""
              }`}
            >
              Product
            </span>
          </button>
          <button
            onClick={() => toggleCategory("technical")}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            aria-label="Toggle technical skills"
          >
            <div 
              className={`w-3 h-3 rounded-full bg-emerald-200 dark:bg-emerald-400 transition-all ${
                isCategorySelected("technical") ? "opacity-100 scale-110" : "opacity-100"
              }`}
            ></div>
            <span 
              className={`text-gray-600 dark:text-gray-400 transition-all ${
                isCategorySelected("technical") ? "font-bold text-gray-900 dark:text-gray-100" : ""
              }`}
            >
              Technical
            </span>
          </button>
          <button
            onClick={() => toggleCategory("soft")}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            aria-label="Toggle soft skills"
          >
            <div 
              className={`w-3 h-3 rounded-full bg-pink-200 dark:bg-pink-400 transition-all ${
                isCategorySelected("soft") ? "opacity-100 scale-110" : "opacity-100"
              }`}
            ></div>
            <span 
              className={`text-gray-600 dark:text-gray-400 transition-all ${
                isCategorySelected("soft") ? "font-bold text-gray-900 dark:text-gray-100" : ""
              }`}
            >
              Soft skills
            </span>
          </button>
          
          {/* Reset Button - appears when categories are filtered */}
          {visibleCategories.size > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={resetCategories}
              className="ml-auto px-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 underline transition-colors"
              aria-label="Reset skill filters"
            >
              Reset
            </motion.button>
          )}
        </div>

        {/* All Skills - Simplified Color Coding */}
        <div className="flex flex-wrap gap-3">
          <AnimatePresence mode="sync">
            {skills
              .filter((skill) => isCategoryVisible(skill.category))
              .map((skill) => (
                <motion.span
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.15,
                    layout: { duration: 0.2 }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${categoryStyles[skill.category]}`}
                >
                  {skill.name}
                </motion.span>
              ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
}
